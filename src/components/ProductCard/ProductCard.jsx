import React from 'react';
import ProductImg from '../ProductImg/ProductImg';
import ProductInfo from '../ProductInfo/ProductInfo';
import './ProductCard.styles.scss';

const ProductCard = () => (
	<div className=''>
		<h3>Product</h3>
		<div className='product-card'>
			<ProductImg />
			<ProductInfo />
		</div>
	</div>
);

export default ProductCard;
