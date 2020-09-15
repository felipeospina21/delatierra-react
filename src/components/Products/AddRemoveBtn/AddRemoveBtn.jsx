import React from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/plus-icon.svg';
import { ReactComponent as MinusIcon } from '../../../assets/minus-icon.svg';

import './AddRemoveBtn.styles.scss';

function AddRemoveBtn(props) {
	return (
		<span class='add-remove-product'>
			<button class='remove-product'>
				<MinusIcon class='minus-icon' />
			</button>

			<span class='quantity-selected'>{props.quantity[0]}</span>

			<button class='add-product'>
				<PlusIcon class='plus-icon' />
			</button>
		</span>
	);
}

export default AddRemoveBtn;
