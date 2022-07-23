import axios from 'axios'
import React, { FC, ReactNode, useEffect, useState } from 'react'
import AddItem from '../components/TodoHeader'
import AddItemModal from '../components/AddItemModal'
import '../static/list_styles.css'

interface DataProps {
	_id: string,
	text: string,
	isComplete: boolean
}

export const DisplayList: FC = () => {
	const [posts, setPosts]: any = useState([])

	const handleClick = async (e:any, key: string, item: any) => {
		console.log(e.target)
		if (e.target.id === 'delete') handleDelete(item._id)
		document.getElementById(key)?.classList.toggle('completed')
		await axios.patch(`http://localhost:4200/todo/item/${item._id}/status-change`)
	}

	const handleDelete = async (id:string) => {
		await axios.delete(`http://localhost:4200/todo/item/${id}/remove`)
		setPosts(posts.filter((item:any) => id !== item._id))
	}

	useEffect(() => {
		if (posts.length === 0) {
			(async () => {
				setPosts(await axios.get('http://localhost:4200/todo/list').then(res=>res.data))
			})()
		}
	}, [])

	return (
		<>
			<AddItem />
			<div className='list__container'>
				{
					posts.length > 0 && posts.map((item: DataProps, index: number) => {
						const key = String(index)
						return (
							<div className={`list__item ${item.isComplete === true && 'completed'}`} id={key} key={key} onClick={(e)=>handleClick(e, key, item)}>
								<div className="list__item--checkbox">
									<input type="checkbox" className="checkbox" name="is-complete" />
								</div>
								<div className="list__item--title">{item.text}</div>
								<div className="list__item--options" onClick={() => {handleDelete(item._id)}} id="delete">x</div>
							</div>
						)
					}) as ReactNode
				}
			</div>
			<AddItemModal posts={posts} setPosts={setPosts} />
		</>
	)
}