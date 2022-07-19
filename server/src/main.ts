import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res) => {
	console.log('hey, jake')
	res.status(200).send('hey, jake, but on the screen')
})

app.listen(process.env.PORT || 4200, () => {
	console.log('server is live')
})