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
router.get('/', (req, res) => {
    res.send('page');
});
router.post('/add', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield new TodoModel(req.body);
        res.status(201).json(data);
        data.save().catch(err => console.error(err.message));
    }
    catch (err) {
        console.error(err.message);
    }
}));
export default router;
