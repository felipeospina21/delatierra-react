import React, { useState, useEffect } from 'react';

import './InventoryProduct.scss';

const InventoryProduct = ({ product, products, setProducts, total, setTotal }) => {
	const [ count, setCount ] = useState(0);
	const [ subTotal, setSubTotal ] = useState(0);

	useEffect(
		() => {
			setSubTotal(product.price * count);
		},
		[ products ]
	);

	// useEffect(
	// 	() => {
	// 		setTotal([ ...total, subTotal ]);
	// 	},
	// 	[ subTotal ]
	// );

	const increaseCount = id => {
		setCount(prevCount => prevCount + 1);
		const newProducts = products.map(product => {
			if (product.id === id) {
				return { ...product, quantity: product.quantity - 1 };
			}
			return { ...product };
		});
		setProducts(newProducts);
	};

	const decreaseCount = id => {
		if (count !== 0) {
			setCount(prevCount => prevCount - 1);
			const newProducts = products.map(product => {
				if (product.id === id) {
					return { ...product, quantity: product.quantity + 1 };
				}
				return { ...product };
			});
			setProducts(newProducts);
		}
	};

	return (
		<tr>
			<td>{product.name}</td>
			<td id={product.id} className='inventory-col'>
				<span>
					<button onClick={() => decreaseCount(product.id)}>-</button>
				</span>
				<div>{count}</div>
				<span>
					<button onClick={() => increaseCount(product.id)}>+</button>
				</span>
			</td>
			<td>{subTotal}</td>
			<td>{product.quantity}</td>
		</tr>
	);
};

export default InventoryProduct;
