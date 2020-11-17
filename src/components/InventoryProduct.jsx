import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase/firebase.utils';

import './InventoryProduct.scss';

const InventoryProduct = ({ product }) => {
	const [ count, setCount ] = useState(0);
	const [ initInventory, setInitInventory ] = useState(product.quantity);

	// useEffect(() => {
	// 	const productsRef = firestore.collection('productos').doc(product.id);
	// 	productsRef
	// 		.get()
	// 		.then(function(doc){
	// 			const data = doc.data()
	// 			setInitInventory(data.quantity)
	// 		})
	// 		.catch(err => {
	// 			console.log('Error', err);
	// 		});
	// },[]);

	function addItem() {
		setCount(prevCount => prevCount + 1);
		product.quantity = product.quantity - 1;
	}

	function removeItem() {
		if (count !== 0) {
			setCount(prevCount => prevCount - 1);
			product.quantity = product.quantity + 1;
		}
	}

	function updateProducts() {
		product.quantity = product.quantity + count;
	}

	return (
		<tr>
			<td>{product.name}</td>
			<td className='inventory-col'>
				<span>
					<button onClick={() => removeItem()}>-</button>
				</span>
				<div className='product-inventory'>{count}</div>
				<span>
					<button onClick={() => addItem()}>+</button>
				</span>
			</td>
			<td>
				<div className='product-inventory'>{initInventory}</div>
			</td>
		</tr>
	);
};

export default InventoryProduct;
