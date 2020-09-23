import React, {  useReducer } from 'react';
import ShopContext from './shop-context';
import { shopReducer, ACTIONS } from './reducers';

const GlobalState = props => {
	const [ products, dispatchProducts ] = useReducer(shopReducer, [
		{
			title       : 'ghee',
			alias       : 'Ghee',
			image       : 'prod-ghee-vert.jpg',
			id          : 0,
			description :
				'El Ghee es conocido como el “oro líquido” de la ayurveda y la cocina india, ya que ofrece un sinfín de beneficios nutricionales y aporta un deliciosos sabor a las preparaciones. <br> Se obtiene a partir del procesamiento de la mantequilla de vaca tradicional, en el cual se extrae la caseína, la lactosa y el agua. De esta manera se obtiene un producto alto en ácidos grasos saludables y rico en antioxidantes, vitaminas y minerales. <br> Es ideal para freír o saltear ya que soporta altas temperaturas sin quemarse y sin perder sus propiedades. <br> Es un sustituto para el aceite de cocina, la mantequilla y la margarina. <br> Nuestro GHEE es elaborado en pequeños lotes para garantizar alta calidad en cada una de las producciones. Utilizamos mantequilla pura, sin sal, proveniente de vacas alimentadas únicamente con pasto.',
			properties  : [
				'Aumenta la capacidad digestiva',
				'No altera el colesterol',
				'Lubrica las articulaciones',
				'Alto en antioxidantes',
				'Incrementa la absorción de las vitaminas',
				'Potencializa la memoria y la concentración',
				'Favorece el sistema cardiovascular'
			],
			ingredients : [ '100% mantequilla de vacas de pastoreo' ],
			sizes       : [ '315gr', '160gr' ],
			cost        : [ 24500, 13000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		},
		{
			title       : 'crema de marañon',
			alias       : 'C.Marañon',
			image       : 'prod-mar-vert.jpg',
			id          : 1,
			description : '',
			properties  : [],
			ingredients : [],
			sizes       : [ '400gr', '200gr' ],
			cost        : [ 46500, 24000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		},
		{
			title       : 'crema de almendras',
			alias       : 'C.Almendras',
			image       : 'prod-almd-vert.jpg',
			id          : 2,
			description : '',
			properties  : [],
			ingredients : [],
			sizes       : [ '400gr', '200gr' ],
			cost        : [ 40500, 21000 ],
			quantity    : [ 0, 0 ],
			showBuyMenu : false
		}
	]);

	const [ cartState, dispatch ] = useReducer(shopReducer, { cart: [] });

	const addProductToCart = product => {
		dispatch({ type: ACTIONS.ADD_PRODUCT, product: product });
	};

	const removeProductFromCart = productId => {
		dispatch({ type: ACTIONS.REMOVE_PRODUCT, productID: productId });
	};

	const toggleMenu = showBuyMenu => {
		dispatchProducts({ type: ACTIONS.TOGGLE_PRODUCT_MENU, showBuyMenu: !showBuyMenu });
	};
	return (
		<ShopContext.Provider
			value={{
				products,
				cart                  : cartState.cart,
				addProductToCart,
				removeProductFromCart,
				toggleMenu
			}}>
			{props.children}
		</ShopContext.Provider>
	);
};

export default GlobalState;
