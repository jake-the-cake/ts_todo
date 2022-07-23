var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import TodoModel from '../models/TodoModel.js';
const router = express.Router();
const ThrowError = (res, err) => {
    const status = err.status = res.statusCode;
    res.status(status).json(ErrorJson(err));
};
const ErrorJson = (err) => {
    return {
        'isError': true,
        'message': err.message,
        'status': err.status
    };
};
const LogString = (method, reqPath, status) => {
    return (`${new Date().toLocaleDateString('en-US')} @ ${new Date().toLocaleTimeString('en-US')} :: '${method.toUpperCase()}' Request for '/todo${reqPath}' -- Status: ${status}`);
};
router.get('/list', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(LogString('get', req.path, res.statusCode));
    try {
        const data = yield TodoModel.find();
        res.status(200).json(data);
    }
    catch (err) {
        ThrowError(res, err);
    }
}));
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(LogString('post', req.path, res.statusCode));
    try {
        const data = yield new TodoModel(req.body);
        res.status(201).json(data);
        data.save().catch(err => console.error(err.message));
    }
    catch (err) {
        ThrowError(res, err);
    }
}));
router.patch('/item/:id/status-change', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(LogString('patch', req.path, res.statusCode));
    try {
        const data = yield TodoModel.findById(req.params.id);
        data.isComplete = !data.isComplete;
        data === null || data === void 0 ? void 0 : data.save();
        res.status(200).json(data);
    }
    catch (err) {
        ThrowError(res, err);
    }
}));
export default router;
