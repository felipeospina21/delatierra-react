import React from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import './ProductCard.styles.scss';

const ProductCard = ({
	title,
	sizes,
	cost,
	quantity,
	index,
	image,
	toggleMenu,
	showBuyMenu,
	closeMenu
}) => (
	<div className='product-card'>
		<h4 className='product-title'>{title}</h4>
		<div className='product-img'>
			<img src={require(`../../../assets/${image}`)} alt='prod-img' />

			{showBuyMenu ? (
				<SelectProduct
					title={title}
					size={sizes}
					cost={cost}
					quantity={quantity}
					index={index}
					toggleMenu={toggleMenu}
					closeMenu={closeMenu}
				/>
			) : null}

			<button onClick={() => toggleMenu(index)} index={index} className='buy-btn'>
				Comprar
			</button>
		</div>
	</div>
);

export default ProductCard;
