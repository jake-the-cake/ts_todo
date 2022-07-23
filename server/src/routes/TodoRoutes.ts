import express from 'express'
import TodoModel from '../models/TodoModel.js'
import path from 'path'

const router = express.Router()

const ThrowError = (res: any, err: any) => {
		const status = err.status = res.statusCode
		res.status(status).json(ErrorJson(err))
}

const ErrorJson = (err: any) => {
	return {
		'isError': true,
		'message': err.message,
		'status': err.status
	}
}

const LogString = (method: string, reqPath: string, status: number) => {
	return (
		`${new Date().toLocaleDateString('en-US')} @ ${new Date().toLocaleTimeString('en-US')} :: '${method.toUpperCase()}' Request for '/todo${reqPath}' -- Status: ${status}`
	)
}

router.get('/list', async (req,res) => {
	console.log(LogString('get',req.path, res.statusCode))
	try {
		const data = await TodoModel.find()
		res.status(200).json(data)
	}
	catch (err: any) {
		ThrowError(res,err)
	}
})

router.post('/add', async (req,res) => {
	console.log(LogString('post',req.path, res.statusCode))
	try {
		const data = await new TodoModel(req.body)
		res.status(201).json(data)
		data.save().catch(err => console.error(err.message))
	}
	catch (err: any) {
		ThrowError(res,err)
	}
})

router.patch('/item/:id/status-change', async (req,res) => {
	console.log(LogString('patch', req.path, res.statusCode))
	try {
		const data = await TodoModel.findById(req.params.id)
		data!.isComplete = !data!.isComplete
		data?.save()
		res.status(200).json(data)
	}
	catch (err: any) {
		ThrowError(res,err)
	}
})

router.delete('/item/:id/remove', async (req,res) => {
	console.log(LogString('delete', req.path, res.statusCode))
	try {
		const data = await TodoModel.findByIdAndDelete(req.params.id)
		res.status(200).json(data)
	}
	catch (err:any) {
		ThrowError(res,err)
	}
})

export default router