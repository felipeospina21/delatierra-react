import React from 'react';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';
import './ToggleMenu.styles.scss';

const ToggleMenu = () => (
	<button className='toggle-menu'>
		<MenuIcon />
	</button>
);

export default ToggleMenu;
