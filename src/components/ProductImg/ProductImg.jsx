import React from 'react';
import './ProductImg.styles.scss';
import image from '../../assets/prod-ghee-vert.jpg';

const ProductImg = () => (
	<div className='product-img'>
		<img src={image} alt='prod-img' />
		<button className='buy-btn'>Comprar</button>
	</div>
);

export default ProductImg;
