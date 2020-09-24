import React, { useContext, useState } from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import { ProductsContext } from '../../../context/ProductsContext';
import { ACTIONS } from '../../../context/reducers';
import './ProductCard.styles.scss';

const ProductCard = ({ title, image, alias, size, cost }) => {
	// const [products, setProducts] = useContext(ProductsContext);
	const [ showBuyMenu, setShowBuyMenu ] = useState(false);

	function toggleMenu() {
		setShowBuyMenu(!showBuyMenu);
	}

	return (
		<div className='product-card'>
			<h4 className='product-title'>{title}</h4>
			<div className='product-img'>
				<img src={require(`../../../assets/${image}`)} alt='prod-img' />

				{showBuyMenu ? (
					<SelectProduct alias={alias} size={size} cost={cost} toggleMenu={toggleMenu} />
				) : null}

				<button onClick={() => toggleMenu()} className='buy-btn'>
					Comprar
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
