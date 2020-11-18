import React, { useState } from 'react';
import InventoryProduct from './InventoryProduct';
import { firestore } from '../firebase/firebase.utils';


import './InventoryProduct.scss';

const InventoryTable = ({ products, setProducts }) => {
	const [ total, setTotal ] = useState([]);

	const addProductsToCart = async (products) => {
		products.map(product=>{
			firestore.collection('productos').doc(product.id).update({quantity:product.quantity})

		})
		console.log('BD Modificada')
		// console.log(products)
	};

	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Cantidad</th>
						<th>Sub Total</th>
						<th>Inventario</th>
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
								total={total}
								setTotal={setTotal}
								// subTotal={subTotal}
								// setSubTotal={setSubTotal}
							/>
						);
					})}
					<tr>
						<td />
						<td>Total</td>
						<td>{0}</td>
					</tr>
				</tbody>
			</table>
			<button className='update-inventory-btn' onClick={() => addProductsToCart(products)}>
				Vender
			</button>
		</div>
	);
};

export default InventoryTable;
