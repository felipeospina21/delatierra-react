import React, { useState } from 'react';
import AddRemoveBtn from '../AddRemoveBtn/AddRemoveBtn';
import { FiX as CloseBtn } from 'react-icons/fi';
import './SelectProduct.styles.scss';

const SelectProduct = ({ alias, size, cost, index, closeMenu }) => {
	const [ countBigSize, setCountBigSize ] = useState(0);
	const [ countSmallSize, setCountSmallSize ] = useState(0);
	const [ cartItems, setCartItems ] = useState([]);

	function addItem(id) {
		if (id === 0) {
			setCountBigSize(prevCount => prevCount + 1);
		} else if (id === 1) {
			setCountSmallSize(prevCount => prevCount + 1);
		}
	}

	function removeItem(id) {
		if (id === 0 && countBigSize !== 0) {
			setCountBigSize(prevCount => prevCount - 1);
		} else if (id === 1 && countSmallSize !== 0) {
			setCountSmallSize(prevCount => prevCount - 1);
		}
	}

	function addItemsToCart(alias, size) {
		const newCartItems = [ ...cartItems ];
		if (countBigSize > 0) newCartItems.push(`${countBigSize} ${alias} ${size[0]}`);
		if (countSmallSize > 0) newCartItems.push(`${countSmallSize} ${alias} ${size[1]}`);
		setCartItems(newCartItems);
	}

	return (
		<div className='select-product'>
			<CloseBtn className='close-btn' onClick={() => closeMenu(index)} />

			<div className='product-size'>
				<div className='product-quantity'>
					{`${size[0]}`}
					<AddRemoveBtn
						quantity={countBigSize}
						id={0}
						addItem={addItem}
						removeItem={removeItem}
					/>
				</div>
				<div className='cost'>{`$${cost[0]}`}</div>

				<div className='product-quantity'>
					{`${size[1]}`}
					<AddRemoveBtn
						quantity={countSmallSize}
						id={1}
						addItem={addItem}
						removeItem={removeItem}
					/>
				</div>
				<div className='cost'>{`$${cost[1]}`}</div>

				<button className='add-to-cart-btn' onClick={() => addItemsToCart(alias, size)}>
					Agregar
				</button>
			</div>
		</div>
	);
};

export default SelectProduct;
