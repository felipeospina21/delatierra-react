import React from 'react';
import { ReactComponent as ArrowIcon } from '../../assets/arrow-down.svg';
import './ProductDropMenu.styles.scss';

const ProductDropMenu = () => (
	<div className='drop-menu'>
		<h4>titulo</h4>
		<button className='drop-btn'>
			<ArrowIcon className='arrow-icon' />
		</button>
	</div>
);

export default ProductDropMenu;
