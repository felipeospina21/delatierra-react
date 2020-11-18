import React from 'react';

const Inventory = ({ products, setProducts }) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Producto</th>
						<th>Inventario</th>
					</tr>
				</thead>
				<tbody>
					{products.map(product => {
						return (
							<tr key={product.id}>
								<td>{product.name}</td>
								<td>{product.quantity}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default Inventory;
