import React from 'react'
import Item from './item'
export default class Items extends React.Component {
	render() {
		return (
			<main>
				{this.props.items.map((el) => (
					<Item
						onShowItem={this.props.onShowItem}
						key={el.id}
						item={el}
						onAdd={this.props.onAdd}
					/>
				))}
			</main>
		)
	}
}
