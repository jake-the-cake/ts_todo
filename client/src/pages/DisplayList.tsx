import React, { FC } from 'react'
import '../static/list_styles.css'

setTimeout(() => {
	console.log('hi')
},3000)

export const DisplayList: FC = () => {
	const handleClick = () => {
		document.getElementById('a')?.classList.toggle('completed')
	}

	return (
		<div className='list__container'>
			<div className="list__item completed" id='a' onClick={handleClick}>
				<div className="list__item--checkbox">
					<input type="checkbox" className='checkbox' name="is-complete" />
				</div>
				<div className="list__item--title">Do a thing</div>
				<div className="list__item--options">...</div>
			</div>
			<div className="list__item">
				<div className="list__item--checkbox">
					<input type="checkbox" className='checkbox' name="is-complete" />
				</div>
				<div className="list__item--title">Do a thing</div>
				<div className="list__item--options">...</div>
			</div>
		</div>
	)
}