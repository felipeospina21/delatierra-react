import React, { useState } from 'react';
import InventoryRow from './InventoryRow';
import { firestore } from '../firebase/firebase.utils';
import './InventoryProduct.scss';


const InventoryTable = ({ products, setProducts }) => {
	const addToInventory = async products => {
		products.map(product => {
			firestore
				.collection('productos')
				.doc(product.id)
				.update({ quantity: product.quantity });
		});
		console.log('BD Modificada');
	};

	return (
		<div className='table-inventory-container'>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Inventario</th>
						<th>Agregar Cantidad</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<InventoryRow
								key={product.id}
								product={product}
								products={products}
								setProducts={setProducts}
							/>
						);
					})}
				</tbody>
			</table>
			<button className='update-inventory-btn' onClick={() => addToInventory(products)}>Actualizar</button>
		</div>
	);
};

export default InventoryTable;
