import React from 'react';
import { FiX as CloseBtn } from 'react-icons/fi';
import CartProduct from '../CartProduct/CartProduct';
import './CartDropdown.styles.scss';

const CartDropdown = () => (
	<div className='cart-dropdown'>
		<CloseBtn />
		<CartProduct />
		<div className='check-out'>
			total
			<button>Pagar</button>
			<button>Borrar</button>
		</div>
	</div>
);

export default CartDropdown;
