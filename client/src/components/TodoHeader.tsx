import React, { ReactNode } from 'react'
import axios from 'axios'

const handleClick = () => {
	const modal = document.getElementById('modal')
	modal?.classList.remove('modal-hidden')
	document.getElementById('modal-text')?.focus()
}
export default () => {
	return (
		<div className='list-header'>
			<span className='list-title'>Things To Do</span>
			<button className="list-add-button" onClick={handleClick}>+</button>
		</div>

	)
}