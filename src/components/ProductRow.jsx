import React, { useState, useEffect, useRef } from 'react';
import { thousandSeparator } from '../context/utils';

import './InventoryProduct.scss';

const ProductRow = ({ product, products, setProducts }) => {
	const [ count, setCount ] = useState(0);
	const [ subTotal, setSubTotal ] = useState(0);
	const ref = useRef(count);

	useEffect(
		() => {
			setSubTotal(product.price * ref.current);
		},
		[ products ]
	);

	const increaseCount = id => {
		setCount(prevCount => prevCount + 1);
		ref.current = count + 1;
		const newProducts = products.map(product => {
			if (product.id === id) {
				return {
					...product,
					quantity : product.quantity - 1,
					subTotal : product.price * ref.current
				};
			}
			return { ...product };
		});
		setProducts(() => newProducts);
	};

	const decreaseCount = id => {
		if (count !== 0) {
			setCount(prevCount => prevCount - 1);
			ref.current = count - 1;
			const newProducts = products.map(product => {
				if (product.id === id) {
					return {
						...product,
						quantity : product.quantity + 1,
						subTotal : product.price * ref.current
					};
				}
				return { ...product };
			});
			setProducts(newProducts);
		}
	};

	return (
		<tr>
			<td className='inventory-name'>{product.name}</td>
			<td>{product.quantity}</td>
			<td id={product.id} className='quantity-col'>
				<span>
					<button onClick={() => decreaseCount(product.id)}>-</button>
				</span>
				<div>{count}</div>
				<span>
					<button onClick={() => increaseCount(product.id)}>+</button>
				</span>
			</td>
			<td>
				<div className='inventory-subtotal'>{thousandSeparator(subTotal)}</div>
			</td>
		</tr>
	);
};

export default ProductRow;
