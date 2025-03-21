import Header from './components/Header'
import Footer from './components/Footer'
import React from 'react'
import Items from './components/items'
import AlertWarningMessage from './components/Alert'
import Categories from './components/Categories'
import ShowFullItem from './components/ShowItem'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			currentItems: [],
			orders: [],
			items: [
				{
					id: 1,
					title: 'Logitech G Pro X Superlight',
					img: 'logitech-gpro.webp',
					desc: 'Ultra-lightweight gaming mouse with HERO 25K sensor and Lightspeed wireless technology.',
					category: 'Mice',
					price: 129.99,
				},
				{
					id: 2,
					title: 'Logitech G915 TKL',
					img: 'logitech-g915.webp',
					desc: 'Wireless mechanical keyboard with Lightsync RGB backlighting and GL switches.',
					category: 'Keyboards',
					price: 199.99,
				},
				{
					id: 3,
					title: 'Logitech G502 HERO',
					img: 'logitech-g502.webp',
					desc: 'Wired gaming mouse with HERO 25K sensor and adjustable weight system.',
					category: 'Mice',
					price: 79.99,
				},

				{
					id: 4,
					title: 'Logitech G Pro X Wireless',
					img: 'logitech-gprox.webp',
					desc: 'Gaming headset with Blue VO!CE technology and DTS surround sound.',
					category: 'Headsets',
					price: 229.99,
				},
				{
					id: 5,
					title: 'Logitech MX Master 3S',
					img: 'logitech-msx3s.webp',
					desc: 'Professional wireless mouse with MagSpeed scrolling and 8K DPI sensor.',
					category: 'Mice',
					price: 99.99,
				},
				{
					id: 6,
					title: 'Logitech G733 Lightspeed',
					img: 'logitech-g733.webp',
					desc: 'Lightweight wireless gaming headset with RGB lighting and memory foam ear cushions.',
					category: 'Headsets',
					price: 149.99,
				},
				{
					id: 7,
					title: 'Logitech StreamCam',
					img: 'logitech-streamcam.webp',
					desc: 'Full HD 1080p 60fps streaming camera with autofocus and USB-C connectivity.',
					category: 'Cameras',
					price: 169.99,
				},
				{
					id: 8,
					title: 'Logitech G Pro X TKL',
					img: 'logitech-gprotkl.webp',
					desc: 'Compact tenkeyless wireless mechanical keyboard with RGB backlighting.',
					category: 'Keyboards',
					price: 179.99,
				},
				{
					id: 9,
					title: 'Logitech C920 HD Pro',
					img: 'logitech-c920.webp',
					desc: 'Full HD 1080p webcam with autofocus and stereo microphones.',
					category: 'Cameras',
					price: 99.99,
				},
			],
			showFullItem: false,
			fullItem: {},
		}
		this.state.currentItems = this.state.items
		this.deleteItem = this.deleteItem.bind(this)
		this.addToOrder = this.addToOrder.bind(this)
		this.chooseCategory = this.chooseCategory.bind(this)
		this.onShowItem = this.onShowItem.bind(this)
	}
	render() {
		return (
			<div className='wrapper'>
				<Header orders={this.state.orders} onDelete={this.deleteItem} />
				<Categories chooseCategory={this.chooseCategory} />
				<Items
					onShowItem={this.onShowItem}
					items={this.state.currentItems}
					onAdd={this.addToOrder}
				/>

				{this.state.showFullItem && (
					<ShowFullItem
						onShowItem={this.onShowItem}
						onAdd={this.addToOrder}
						item={this.state.fullItem}
					/>
				)}
				<Footer />
			</div>
		)
	}

	onShowItem(item) {
		this.setState({ fullItem: item })
		this.setState({ showFullItem: !this.state.showFullItem })
	}

	chooseCategory(category) {
		if (category === 'all') {
			this.setState({
				currentItems: this.state.items,
			})
			return
		}

		this.setState({
			currentItems: this.state.items.filter(
				(el) => el.category === category
			),
		})
	}
	deleteItem(id) {
		this.setState({
			orders: this.state.orders.filter((el) => el.id !== id),
		})
	}
	addToOrder(item) {
		let IsInArray = false
		this.state.orders.forEach((el) => {
			if (el.id === item.id) {
				IsInArray = true
				return <AlertWarningMessage />
			}
		})
		if (!IsInArray) this.setState({ orders: [...this.state.orders, item] })
	}
}

export default App
