import React, { FC } from 'react'
import '../static/list_styles.css'

export const DisplayList: FC = () => {
	return (
		<div className='list__container'>
			<div className="list__item">
				<div className="list__item--checkbox">
					<input type="checkbox" name="is-complete" id="a" />
				</div>
				<div className="list__item--title">Do a thing</div>
				<div className="list__item--options">...</div>
			</div>
			<div className="list__item">
				<div className="list__item--checkbox">
					<input type="checkbox" className='checkbox' name="is-complete" id="a" />
				</div>
				<div className="list__item--title">Do a thing</div>
				<div className="list__item--options">...</div>
			</div>
		</div>
	)
}