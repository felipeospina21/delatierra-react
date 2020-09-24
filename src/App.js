import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';

import './App.css';

function App() {
	return (
		<CartProvider>
			<ProductsProvider>
				<Router>
					<div className='App'>
						<Switch>
							<Route exact path='/conocenos'>
								<AboutUs />
							</Route>

							<Route exact path='/productos'>
								<Products />
							</Route>

							<Route exact path='/contacto'>
								<Contact />
							</Route>

							<Route exact path='/blog'>
								<Blog />
							</Route>

							<Route path='/'>
								<Home />
							</Route>
						</Switch>
					</div>
				</Router>
			</ProductsProvider>
		</CartProvider>
	);
}

export default App;
