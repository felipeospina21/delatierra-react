import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/firebase.utils';

import './InventoryProduct.scss';

const InventoryProduct = ({ product, products, setProducts }) => {
	const id = product.ref;
	const [ inventory, setInventory ] = useState({});
	const [ quantity, setQuantity ] = useState(0);

	useEffect(() => {
		const productsRef = firestore.collection('productos').doc(id);
		productsRef
			.get()
			.then(function(doc) {
				if (doc.exists) {
					setInventory(doc.data());
				} else {
					console.log('No such document!');
				}
			})
			.catch(err => {
				console.log('Error', err);
			});
	});

	function addItem(id) {
		const newProducts = [ ...products ];
		newProducts.forEach(product => {
			if (product.ref === id) {
				const prevQuantity = quantity;
				setQuantity(prevQuantity => prevQuantity + 1);
				const initInventory = product.quantity;
				product.quantity = initInventory + quantity;
			}
		});

		setProducts(newProducts);
	}

	function removeItem(id) {
		const newProducts = [ ...products ];
		newProducts.forEach(product => {
			if (product.ref === id) {
				const prevQuantity = quantity;
				if (prevQuantity !== 0) {
					product.quantity = prevQuantity - 1;
				}
			}
		});
		setProducts(newProducts);
	}

	return (
		<tr>
			<td>{product.name}</td>
			<td className='inventory-col'>
				<div className='product-inventory'>{inventory.quantity}</div>
				<span>
					<button onClick={() => removeItem(id)}>-</button>
				</span>
				<div className='product-inventory'>{quantity}</div>
				<span>
					<button onClick={() => addItem(id)}>+</button>
				</span>
			</td>
		</tr>
	);
};

export default InventoryProduct;
