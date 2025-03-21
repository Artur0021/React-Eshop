import React from 'react'

export default class Categories extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			categories: [
				{
					key: 'all',
					name: 'All',
				},
				{
					key: 'Mice',
					name: 'Gaming Mouses',
				},
				{
					key: 'Headsets',
					name: 'Headphones',
				},
				{
					key: 'Keyboards',
					name: 'Keyboards',
				},
				{
					key: 'Cameras',
					name: 'Cameras',
				},
			],
		}
	}
	render() {
		return (
			<div className='categories'>
				{this.state.categories.map((el) => (
					<div
						key={el.key}
						onClick={() => this.props.chooseCategory(el.key)}
					>
						{el.name}
					</div>
				))}
			</div>
		)
	}
}
