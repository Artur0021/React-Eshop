import { useState, useEffect } from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order'
export default function Header(props) {
	let Total = 0
	props.orders.forEach((el) => (Total += el.price).toFixed(2))
	const [cartActive, setCartActive] = useState(false)

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				cartActive &&
				!event.target.closest('.shop-cart') &&
				!event.target.closest('.shop-cart-button')
			) {
				setCartActive(false)
			}
		}

		const handleEscape = (event) => {
			if (event.key === 'Escape') {
				setCartActive(false)
			}
		}

		document.addEventListener('mousedown', handleClickOutside)
		document.addEventListener('keydown', handleEscape)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			document.removeEventListener('keydown', handleEscape)
		}
	}, [cartActive])
	return (
		<header>
			<div>
				<span className='logo'>Logitech</span>
				<ul className='nav'>
					<li>About us</li>
					<li>Contacts</li>
					<li>Cabinet</li>
				</ul>
				<FaShoppingCart
					onClick={() => setCartActive((prev) => !prev)}
					className={`shop-cart-button  ${cartActive ? 'active' : ''}`}
				/>

				{cartActive && (
					<div className='shop-cart'>
						{props.orders.map((el) => (
							<Order onDelete={props.onDelete} key={el.id} item={el} />
						))}
						<p className='total'>Total Price:{Total}</p>
					</div>
				)}
				{cartActive && <div className='overlay'></div>}
			</div>
			<div className='introSectionPhoto'></div>
		</header>
	)
}
