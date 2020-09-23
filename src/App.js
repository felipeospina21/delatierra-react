import React from 'react';
import Products from './pages/Products/Products';
import GlobalState from './context/GlobalState';
import './App.css';

function App() {
	return (
		<GlobalState>
			<div className='App'>
				<Products />
			</div>
		</GlobalState>
	);
}

export default App;
