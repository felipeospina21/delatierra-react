import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';
import { CartProvider } from './context/CartContext';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Blog from './pages/Blog/Blog';
import SignInSignUp from './pages/SignInSignUp/SignInSignUp';

import './App.css';

function App() {
	return (
		<CartProvider>
			<ProductsProvider>
				<Router>
					<div className='App'>
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>

							<Route path='/conocenos'>
								<AboutUs />
							</Route>

							<Route path='/productos'>
								<Products />
							</Route>

							<Route path='/contacto'>
								<Contact />
							</Route>

							<Route path='/blog'>
								<Blog />
							</Route>

							<Route path='/registro'>
								<SignInSignUp />
							</Route>
						</Switch>
					</div>
				</Router>
			</ProductsProvider>
		</CartProvider>
	);
}

export default App;
