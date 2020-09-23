import React, { useState, useContext } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import ShopContext from '../../../context/shop-context';

import './ProductsCollection.styles.scss';

function ProductsCollection() {
	const context = useContext(ShopContext);

	return (
		<div className='products-collection'>
			<div className='products-collection-title'>
				<h3>nuestros productos</h3>
			</div>
			{context.products.map(({ ...otherProductProps }, index) => (
				<ProductCard key={index} index={index} {...otherProductProps} />
			))}
		</div>
	);
}

export default ProductsCollection;
