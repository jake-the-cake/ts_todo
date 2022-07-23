import axios from 'axios'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import AddItem from '../components/AddItem'
import AddItemModal from '../components/AddItemModal'
import '../static/list_styles.css'

interface DataProps {
	text: string,
	isComplete: boolean
}

export const DisplayList: FC = () => {
	const [posts, setPosts]: any = useState([])

	const handleClick = (key: string) => {
		document.getElementById(key)?.classList.toggle('completed')
	}

	const getData: any = async () => {
		setPosts(await axios.get('http://localhost:4200/todo/list').then(res=>res.data))
	}

	useEffect(() => {
		if (posts.length === 0) {
			getData()
		}
	}, [])

	return (
		<>
			<AddItem />
			<div className='list__container'>
				{
					posts.length > 0 && posts.map((item: DataProps, index: number) => {
						const key = String(index)
						console.log(item)
						return (
							<div className={`list__item ${item.isComplete === true && 'completed'}`} id={key} key={key} onClick={()=>handleClick(key)}>
								<div className="list__item--checkbox">
									<input type="checkbox" className="checkbox" name="is-complete" />
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