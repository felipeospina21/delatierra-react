import React from 'react';
import Products from './pages/Products/Products';
import './App.css';
import { ProductsProvider } from './context/ProductsContext';

function App() {
	return (
		<ProductsProvider>
			<div className='App'>
				<Products />
			</div>
		</ProductsProvider>
	);
}

export default App;
