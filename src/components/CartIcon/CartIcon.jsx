import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cartLogo.svg';
import './CartIcon.styles.scss';

const CartIcon = () => (
	<div className='cart-container'>
		<ShoppingIcon className='shopping-icon' />
		<span className='item-count'>0</span>
	</div>
);

export default CartIcon;
