import React from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import './ProductCard.styles.scss';

const ProductCard = ({
	title,
	alias,
	sizes,
	cost,
	index,
	image,
	openMenu,
	showBuyMenu,
	closeMenu
}) => (
	<div className='product-card'>
		<h4 className='product-title'>{title}</h4>
		<div className='product-img'>
			<img src={require(`../../../assets/${image}`)} alt='prod-img' />

			{showBuyMenu ? (
				<SelectProduct
					alias={alias}
					size={sizes}
					cost={cost}
					index={index}
					closeMenu={closeMenu}
				/>
			) : null}

			<button onClick={() => openMenu(index)} index={index} className='buy-btn'>
				Comprar
			</button>
		</div>
	</div>
);

export default ProductCard;
