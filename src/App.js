import React from 'react';
import Header from './components/NavBar/Header/Header';
import ProductsCollection from './components/Products/ProductsCollection/ProductsCollection';
import './App.css';

function App() {
	return (
		<div className='App'>
			<Header />
			<ProductsCollection />
		</div>
	);
}

export default App;
