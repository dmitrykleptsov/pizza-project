import React from 'react'
import { Link } from 'react-router-dom'
import emptyCartImg from '../assets/img/empty-cart.png'

const CartEmpty: React.FC = () =>
	<div className='cart cart--empty'>
		<h2>
			Корзина пустая
			<span>😕</span>
		</h2>
		<p>
			Вероятнее всего, вы ещё не выбрали пиццу.
			<br />
			Для того, чтобы выбрать, перейдите на главную страницу.
		</p>
		<img src={emptyCartImg} alt="Empty cart" />
		<Link to="/" className='button button--black'>
			<span>Вернуться назад</span>
		</Link>
	</div>

export default CartEmpty
