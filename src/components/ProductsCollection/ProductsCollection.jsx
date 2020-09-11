import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsCollection.styles.scss';

const ProductsCollection = () => (
	<div className='products'>
		<h3 className='products__title'>nuestros productos</h3>
		<ProductCard />
	</div>
);

export default ProductsCollection;
