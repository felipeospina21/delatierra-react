import React, { useEffect, useState, useContext } from 'react';
import { firestore } from '../firebase/firebase.utils';
import { InventoryContext } from '../context/InventoryContext';

import './InventoryProduct.scss';

const InventoryProduct = ({ product, products, setProducts }) => {
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
	function saleProduct() {
		product.quantity = product.quantity - 1;
	}

	function addItem() {
		setCount(prevCount => prevCount + 1);
	}

	function removeItem() {
		if (count !== 0) {
			setCount(prevCount => prevCount - 1);
			product.quantity = product.quantity + 1;
		}
	}

	function handleChange(e) {
		const { id, value } = e.target;
		console.log(value);

		const newProducts = products.map(product => {
			if (product.id === id) {
				return {
					...product,
					quantity : Number(product.quantity) + Number(value)
				};
			}
			return product;
		});
		setProducts(newProducts);
	}

	return (
		<tr>
			<td>{product.name}</td>
			<td>{initInventory}</td>
			<td className='inventory-col'>
				<input type='number' id={product.id} onChange={handleChange} />
			</td>
		</tr>
	);
};

export default InventoryProduct;
