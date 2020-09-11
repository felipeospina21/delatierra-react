import React from 'react';
// import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logoDLT.svg';
import CartIcon from '../CartIcon/CartIcon';
import ToggleMenu from '../ToggleMenu/ToggleMenu';
import './Header.styles.scss';

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='header'>
				<Logo className='logo' />
				<ToggleMenu />
				<ul className='links'>
					<li>Conócenos</li>
					<li>Productos</li>
					<li>Contacto</li>
				</ul>
				<CartIcon />
			</div>
		);
	}
}

export default Header;
