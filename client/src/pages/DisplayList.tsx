import React, { FC, ReactNode } from 'react'
import AddItem from '../components/AddItem'
import AddItemModal from '../components/AddItemModal'
import '../static/list_styles.css'

interface DataProps {
	text: string
}

const data: DataProps[] = [{
		text: 'text'
	},{
		text: 'more text'
	},{
		text: 'even more text'
	}]

export const DisplayList: FC = () => {
	const handleClick = (key: string) => {
		console.log(key)
		document.getElementById(key)?.classList.toggle('completed')
	}

	return (
		<>
			<AddItem />
			<div className='list__container'>
				{
					data.map((item: DataProps, index: number) => {
						const key = String(index)
						return (
							<div className="list__item" id={key} key={key} onClick={()=>handleClick(key)}>
								<div className="list__item--checkbox">
									<input type="checkbox" className='checkbox' name="is-complete" />
								</div>
								<div className="list__item--title">{item.text}</div>
								<div className="list__item--options">...</div>
							</div>
						)
					}) as ReactNode
				}
			</div>
			<AddItemModal />
		</>
	)
}