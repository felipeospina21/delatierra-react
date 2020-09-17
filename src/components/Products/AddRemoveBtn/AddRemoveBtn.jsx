import React from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/minus-icon.svg';

import './AddRemoveBtn.styles.scss';

function AddRemoveBtn(props) {
	return (
		<span className='add-remove-product'>
			<button className='remove-product'>
				<MinusIcon className='minus-icon' />
			</button>

			<span className='quantity-selected'>{props.quantity[0]}</span>

			<button className='add-product'>
				<PlusIcon className='plus-icon' />
			</button>
		</span>
	);
}

export default AddRemoveBtn;
