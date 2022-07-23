import React from 'react'
import '../static/modal_styles.css'

const toggleModal = (e: any) => {
	if (e.target.id === 'modal') {
		const modal = document.getElementById('modal')
		modal?.classList.toggle('modal-hidden')
	}
}

export default () => {
	return (
		<div id='modal' onClick={toggleModal} className='modal-bg modal-hidden'>
			<div className="modal-card" id="modal-card">
				<span>Enter the task below:</span>
				<input type="text" />
				<button>Add</button>
			</div>
		</div>
	)
 }