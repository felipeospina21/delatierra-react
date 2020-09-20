import React from 'react';
import { ReactComponent as AddBtn } from '../../../assets/plus-icon.svg';
import { ReactComponent as RemoveBtn } from '../../../assets/minus-icon.svg';

import './AddRemoveBtn.styles.scss';

function AddRemoveBtn({ quantity, addItem, removeItem, id }) {
	return (
		<span className='add-remove-product'>
			<button className='remove-product'>
				<RemoveBtn className='minus-icon' onClick={() => removeItem(id)} />
			</button>

			<span className='quantity-selected'>{quantity}</span>

			<button className='add-product'>
				<AddBtn className='plus-icon' onClick={() => addItem(id)} />
			</button>
		</span>
	);
}

export default AddRemoveBtn;
