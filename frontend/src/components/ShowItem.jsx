import React from 'react'

export default class ShowFullItem extends React.Component {
	componentDidMount() {
		document.addEventListener('keydown', this.handleKeyDown)
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleKeyDown)
	}

	handleKeyDown = (event) => {
		if (event.key === 'Escape') {
			this.props.onShowItem()
		}
	}

	handleOverlayClick = (event) => {
		if (event.target.classList.contains('full-item')) {
			this.props.onShowItem()
		}
	}

	render() {
		return (
			<div className='full-item' onClick={this.handleOverlayClick}>
				<div>
					<img
						src={'./img/' + this.props.item.img}
						alt=''
						onClick={() => this.props.onShowItem(this.props.item)}
					/>
					<h2>{this.props.item.title}</h2>
					<p>{this.props.item.desc}</p>
					<b>{this.props.item.price}$</b>
					<div
						className='add-to-cart'
						onClick={() => this.props.onAdd(this.props.item)}
					>
						+
					</div>
				</div>
			</div>
		)
	}
}
