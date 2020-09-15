import React from 'react';
// import BuyBtn from '../BuyBtn/BuyBtn';
import SelectProduct from '../SelectProduct/SelectProduct';
import './ProductCard.styles.scss';

const ProductCard = props => (
	<div className='product-card'>
		<h4 className='product-title'>{props.title}</h4>
		<div className='product-img'>
			<img src={require(`../../../assets/${props.image}`)} alt='prod-img' />

			{/* {props.showBuyMenu ? <SelectProduct /> : null} */}
			<SelectProduct
				title={props.title}
				size={props.sizes}
				cost={props.cost}
				quantity={props.quantity}
			/>

			<button onClick={props.clickHandler} className='buy-btn'>
				Comprar
			</button>
		</div>
	</div>
);

export default ProductCard;

// class ProductCard extends React.Component {
// 	constructor(props){
// 		super()
// 	}
// 	clickHandler = () => {
// 		this.props.clickHandler()
// 	}
// 	render() {

// 		return (
// 			<div className='product-card'>
// 			<h4 className='product-title'>{props.title}</h4>
// 			<div className='product-img'>
// 				<img src={require(`../../../assets/${props.image}`)} alt='prod-img' />

// 				{props.showBuyMenu ? <SelectProduct /> : null}

// 				<button onClick={() => props.clickHandler} className='buy-btn'>
// 					Comprar
// 				</button>
// 			</div>
// 		</div>
// 		);
// 	}
// }

// export default ProductCard;
