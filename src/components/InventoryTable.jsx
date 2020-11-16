import React, { useState, useEffect } from 'react';
import InventoryProduct from './InventoryProduct';
import { firestore } from '../firebase/firebase.utils';

import './InventoryProduct.scss';

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

	function updateInventory() {
		const updatedProducts = [];
		products.forEach(product => {
			const productRef = firestore
				.collection('productos')
				.doc(product.ref)
				.update({ quantity: product.quantity })
				.then(function() {
					updatedProducts.push(true);
				})
				.catch(function(error) {
					console.error('Error updating document: ', error);
				});
		});

		const updated = element => element === true;
		const succes = 'Productos actualizados en la Base de Datos';
		const fail = 'Error al actualizar productos';
		updatedProducts.every(updated) ? alert(succes) : alert(fail);
	}

	// function addItem(id) {
	// 	const newProducts = [ ...products ];
	// 	newProducts.forEach(product => {
	// 		if (product.ref === id) {
	// 			const prevQuantity = product.quantity;
	// 			product.quantity = prevQuantity + 1;
	// 		}
	// 	});
	// 	setProducts(newProducts);
	// }

	// function removeItem(id) {
	// 	const newProducts = [ ...products ];
	// 	newProducts.forEach(product => {
	// 		if (product.ref === id) {
	// 			const prevQuantity = product.quantity;
	// 			if (prevQuantity !== 0) {
	// 				product.quantity = prevQuantity - 1;
	// 			}
	// 		}
	// 	});
	// 	setProducts(newProducts);
	// }

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Cantidad</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<InventoryProduct
								key={product.name}
								product={product}
								products={products}
								setProducts={setProducts}
								// addItem={addItem}
								// removeItem={removeItem}
							/>
						);
					})}
				</tbody>
			</table>
			<button className='update-inventory-btn' onClick={() => updateInventory()}>
				Actualizar Inventario
			</button>
		</div>
	);
};

export default InventoryTable;
