import React, { useState, createContext } from 'react';


export const InventoryContext = createContext();

export const InventoryProvider = props => {
	const [ initInventory, setInitInventory ] = useState(0);

	return (
		<InventoryContext.Provider value={[ initInventory, setInitInventory ]}>
			{props.children}
		</InventoryContext.Provider>
	);
};
