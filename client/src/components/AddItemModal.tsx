import axios from 'axios'
import React from 'react'
import '../static/modal_styles.css'

const toggleModal = (e: any | null) => {
	if (e?.target.id === 'modal' || e === null) {
		const modal = document.getElementById('modal')
		modal?.classList.toggle('modal-hidden')
	}
}

export default (props:any) => {
	const handleAdd = async () => {
		const input = (document.getElementById('modal-text') as HTMLInputElement)
		const text = input.value
		const data = await axios.post('http://localhost:4200/todo/add', {
			text: text
		}).then(res => props.setPosts([...props.posts, res.data]))
		toggleModal(null)
		input.value = '' 
	}

	return (
		<div id='modal' onClick={toggleModal} className='modal-bg modal-hidden'>
			<div className="modal-card" id="modal-card">
				<span>Enter the task below:</span>
				<input type="text" id="modal-text" />
				<button onClick={handleAdd} id="add-button">Add</button>
			</div>
		</div>
	)
 }