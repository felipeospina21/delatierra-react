import React, { useState, useEffect } from 'react';
import InventoryTable from './InventoryTable';
import Inventory from './Inventory';
import Checkout from './Checkout';
import { firestore } from '../firebase/firebase.utils';

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
		<div>
			<InventoryTable products={products} setProducts={setProducts} />
			<Inventory products={products} setProducts={setProducts} />
			<Checkout />
		</div>
	);
};

export default InventoryContainer;
