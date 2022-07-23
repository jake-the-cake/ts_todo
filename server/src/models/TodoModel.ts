import mongoose from 'mongoose'

const Todo = new mongoose.Schema({
	text: {type: String, required: true},
	isComplete: {type: Boolean, default: false}
}, {timestamps: true})

const TodoModel = mongoose.model('Todo', Todo)

export default TodoModel