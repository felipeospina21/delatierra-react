import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../../assets/cartLogo.svg';
import './CartIcon.styles.scss';

const CartIcon = ({ toggleCartDropdown }) => (
	<div className='cart-container'>
		<ShoppingIcon className='shopping-icon' onClick={toggleCartDropdown} />
		<span className='item-count'>0</span>
	</div>
);

export default CartIcon;
