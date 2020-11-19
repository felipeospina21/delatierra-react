import React, { useState, useEffect } from 'react';
import ProductsTable from './ProductsTable';
import InventoryTable from './InventoryTable';
import { firestore } from '../firebase/firebase.utils';

import './InventoryProduct.scss';

const InventoryContainer = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		getInventory();
	}, []);

	const getInventory = async () => {
		firestore.collection('productos').onSnapshot(querySnapshot => {
			const docs = [];
			querySnapshot.forEach(doc => {
				docs.push({ ...doc.data(), id: doc.id });
			});
			setProducts(docs);
		});
	};
	return (
		<div className='inventory-container'>
			<ProductsTable products={products} setProducts={setProducts} />
			<InventoryTable products={products} setProducts={setProducts} />
		</div>
	);
};

export default InventoryContainer;
