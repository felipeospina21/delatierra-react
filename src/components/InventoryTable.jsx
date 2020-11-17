import React, { useState, useEffect } from 'react';
import InventoryProduct from './InventoryProduct';
import { firestore } from '../firebase/firebase.utils';

import './InventoryProduct.scss';

const InventoryTable = () => {
	const [ products, setProducts ] = useState([]);

	useEffect(() => {
		const productsRef = firestore.collection('productos');
		productsRef
			.get()
			.then(snapshot => {
				const data = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
				setProducts(data);
			})
			.catch(err => {
				console.log('Error', err);
			});
	}, []);

	function updateInventory() {
		const updatedProducts = [];

		products.forEach(product => {
			const productRef = firestore.collection('productos').doc(product.id);
			productRef
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

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Inventario</th>
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
							/>
						);
					})}
					<tr>
						<td />
						<td>
							<button className='update-inventory-btn' onClick={() => updateInventory()}>
								Vender
							</button>
						</td>
						<td>
							<button className='update-inventory-btn'>Actualizar Inventario</button>
						</td>
					</tr>
				</tbody>
			</table>
			{/* <div className='table-btn-container'>
				<button className='update-inventory-btn' onClick={() => updateInventory()}>
					Vender
				</button>
				<button className='update-inventory-btn' onClick={() => updateInventory()}>
					Actualizar Inventario
				</button>
			</div> */}
		</div>
	);
};

export default InventoryTable;
