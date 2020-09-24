import React, { useState, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { ProductsContext } from '../../../context/ProductsContext';

import './ProductsCollection.styles.scss';

function ProductsCollection() {
	const [ products, setProducts ] = useContext(ProductsContext);

	return (
		<div className='products-collection'>
			<div className='products-collection-title'>
				<h3>nuestros productos</h3>
			</div>

			{products.map(product => {
				const { id, title, image, sizes, cost, alias } = product;

				return (
					<ProductCard
						key={id}
						id={id}
						title={title}
						image={image}
						size={sizes}
						cost={cost}
						alias={alias}
					/>
				);
			})}
		</div>
	);
}

export default ProductsCollection;
