import React, { useState }from 'react';
import AddRemoveBtn from '../AddRemoveBtn/AddRemoveBtn';
import { FiX as CloseBtn } from 'react-icons/fi';
import './SelectProduct.styles.scss';

const SelectProduct = ({ size, quantity, cost, index, toggleMenu,closeMenu}) => {

	return (
		<div className='select-product'>
			<CloseBtn className='close-btn' onclick={() => closeMenu(index)}/>

			<div className='product-size'>
				<div className='product-quantity'>
					{`${size[0]}`}
					<AddRemoveBtn quantity={quantity} />
				</div>
				<div className='cost'>{`$${cost[0]}`}</div>

				<div className='product-quantity'>
					{`${size[1]}`}
					<AddRemoveBtn quantity={quantity} />
				</div>
				<div className='cost'>{`$${cost[1]}`}</div>

				<button className='add-to-cart-btn'>Agregar</button>
			</div>
		</div>
	);
};

export default SelectProduct;
