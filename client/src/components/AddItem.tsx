import React, { ReactNode } from 'react'
import axios from 'axios'

const handleClick = () => {
	const modal = document.getElementById('modal')
	modal?.classList.remove('modal-hidden')
	console.log(modal)
}
export default () => {


	return (
		<button onClick={handleClick}>Add New Item</button>
	)
}