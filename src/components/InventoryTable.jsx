import React, { useState, useEffect } from 'react';
import InventoryProduct from './InventoryProduct';
import { firestore } from '../firebase/firebase.utils';

const InventoryTable = () => {
	const [ products, setProducts ] = useState([]);
	useEffect(() => {
		const productsRef = firestore.collection('productos');
		const allProducts = productsRef
			.get()
			.then(snapshot => {
				const data = snapshot.docs.map(doc => doc.data());
				setProducts(data);
			})
			.catch(err => {
				console.log('Error', err);
			});
	}, []);

	function addItem(id) {
		const product = products.filter(product => product.name === id);
		if (product) {
			setProducts(product.quantity + 1);
		}
	}

	function removeItem() {
		setProducts(prevCount => prevCount - 1);
	}

	return (
		<table>
			<tr>
				<th>Producto</th>
				<th>Cantidad</th>
			</tr>
			{products.map(product => {
				return (
					<InventoryProduct key={product.name} product={product} addItem={addItem} />
				);
			})}
		</table>
	);
};

export default InventoryTable;
