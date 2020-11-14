import React from 'react';

const InventoryProduct = ({ product, addItem }) => {
	const id = product.name;
	return (
		<tr>
			<td>{product.name}</td>
			<td>
				<span>
					<button>-</button>
				</span>
				<span>{product.quantity}</span>
				<span>
					<button onClick={() => addItem(id)}>+</button>
				</span>
			</td>
		</tr>
	);
};

export default InventoryProduct;
