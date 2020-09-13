import React, { Component } from 'react';
import SelectProduct from '../SelectProduct/SelectProduct';
import './BuyBtn.styles.scss';

class BuyBtn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showBuyMenu : false
		};
	}

	onClickHandler = () => {
		const currentState = this.state.showBuyMenu;
		this.setState({ showBuyMenu: !currentState });
	};

	render() {
		return (
			<div>
				{this.state.showBuyMenu ? <SelectProduct /> : null}
				<button className='buy-btn' onClick={this.onClickHandler}>
					Comprar
				</button>
			</div>
		);
	}
}
export default BuyBtn;
