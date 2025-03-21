import React, { Component } from 'react'
import { FaTrash } from 'react-icons/fa'

export default class Order extends React.Component {
	render() {
		return (
			<div className='item'>
				<img src={'./img/' + this.props.item.img} alt='' />
				<h2 style={{ fontSize: '20px' }}>{this.props.item.title}</h2>
				<b style={{ color: 'green', fontWeight: 500 }}>
					{this.props.item.price}$
				</b>
				<FaTrash
					className='delete'
					onClick={() => this.props.onDelete(this.props.item.id)}
				></FaTrash>
			</div>
		)
	}
}
