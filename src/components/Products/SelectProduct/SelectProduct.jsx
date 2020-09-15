import React from 'react';
import AddRemoveBtn from '../AddRemoveBtn/AddRemoveBtn';
import './SelectProduct.styles.scss';

const SelectProduct = ({ size, quantity, cost }) => {
	return (
		<div className='select-product'>
			<div className='product-size'>
				<div class='product-quantity'>
					{`${size[0]}`}
					<AddRemoveBtn quantity={quantity} />
				</div>
				<div class='cost'>{`$${cost[0]}`}</div>

				<div class='product-quantity'>
					{`${size[1]}`}
					<AddRemoveBtn quantity={quantity} />
				</div>
				<div class='cost'>{`$${cost[1]}`}</div>

				<button class='add-to-cart-btn'>Agregar</button>
			</div>
		</div>
	);
};

export default SelectProduct;
