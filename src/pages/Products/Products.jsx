import React from 'react';
import Header from '../../components/NavBar/Header/Header';
import ProductsCollection from '../../components/Products/ProductsCollection/ProductsCollection';

function Products(props) {
	return (
		<div>
			<Header />
			<ProductsCollection />
		</div>
	);
}

export default Products;
