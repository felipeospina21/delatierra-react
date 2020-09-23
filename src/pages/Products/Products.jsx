import React, { useContext } from 'react';
import Header from '../../components/NavBar/Header/Header';
import ProductsCollection from '../../components/Products/ProductsCollection/ProductsCollection';
import ShopContext from '../../context/shop-context';

function Products(props) {
	const context = useContext(ShopContext);

	return (
		<div>
			<Header />
			<ProductsCollection />
		</div>
	);
}

export default Products;
