import React, { useContext } from 'react';
import { FiX as CloseBtn } from 'react-icons/fi';
import { CartContext } from '../../../context/CartContext';
import CartProduct from '../CartProduct/CartProduct';
import './CartDropdown.styles.scss';

const CartDropdown = () => {
	const [ cartItems, setCartItems ] = useContext(CartContext);

	return (
		<div className='cart-dropdown'>
			<CloseBtn />
			<div>
				{cartItems.map((cartItem, index) => (
					<div className='cart-item' key={index}>
						{cartItem}
					</div>
				))}
			</div>
			<div className='check-out'>
				total
				<button>Pagar</button>
				<button>Borrar</button>
			</div>
		</div>
	);
};

export default CartDropdown;
