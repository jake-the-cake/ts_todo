import express from 'express'
import TodoModel from '../models/TodoModel.js'

const router = express.Router()

router.get('/', (req,res) => {
	res.send('page')
})

router.post('/add', async (req,res) => {
	try {
		const data = await new TodoModel(req.body)
		res.status(201).json(data)
		data.save().catch(err => console.error(err.message))
	}
	catch (err: any) {
		console.error(err.message)
	}
})

export default router