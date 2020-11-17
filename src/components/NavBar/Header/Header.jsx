import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../../assets/logoDLT.svg';
import { ReactComponent as MenuIcon } from '../../../assets/menu.svg';
import { ReactComponent as CloseIcon } from '../../../assets/close-icon.svg';
import { FaRegUser as UserIcon } from 'react-icons/fa';
import CartIcon from '../CartIcon/CartIcon';
import NavLinks from '../NavLinks/NavLinks';
import CartDropdown from '../../Products/CartDropdown/CartDropdown';

import './Header.styles.scss';

const Header = () => {
	const [ showMenu, setShowMenu ] = useState(false);
	const [ showCartMenu, setShowCartMenu ] = useState(false);

	function toggleClass() {
		setShowMenu(currentState => !currentState);
	}

	function toggleCartDropdown() {
		setShowCartMenu(currentState => !currentState);
	}

	return (
		<div>
			<div className='header '>
				<Logo className='logo' />
				{showMenu ? (
					<CloseIcon className='toggle-menu' onClick={toggleClass} />
				) : (
					<MenuIcon className='toggle-menu' onClick={toggleClass} />
				)}
				{showMenu ? <NavLinks /> : null}
				<Link to='/registro' className='user-icon'>
					<UserIcon />
				</Link>
				<CartIcon toggleCartDropdown={toggleCartDropdown} />
			</div>
			{showCartMenu ? <CartDropdown /> : null}
		</div>
	);
};
// class Header extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = { showMenu: false };
// 	}
// 	toggleClass = () => {
// 		const currentState = this.state.showMenu;
// 		this.setState({ showMenu: !currentState });
// 	};

// 	render() {
// 		return (
// 			<div>
// 				<div className='header '>
// 					<Logo className='logo' />
// 					{this.state.showMenu ? (
// 						<CloseIcon className='toggle-menu' onClick={this.toggleClass} />
// 					) : (
// 						<MenuIcon className='toggle-menu' onClick={this.toggleClass} />
// 					)}
// 					{this.state.showMenu ? <NavLinks /> : null}
// 					<CartIcon />
// 				</div>
// 				<CartDropdown />
// 			</div>
// 		);
// 	}
// }

export default Header;
