import React, { forwardRef, useImperativeHandle, useState } from 'react';
import ItemCorb from './ItemCorb'
import { CorbFood, Food } from '../../../models/Food';
import Box from '@mui/material/Box';
import './corb.scss';

const commonStyles = {
	bgcolor: 'background.paper',
	borderColor: 'text.primary',
	m: 3,
	border: 2,
	width: '400px',
	height: '100%',
};

const Corb = forwardRef((props, ref) => {
	const [items, setItems] = useState<CorbFood[]>([]);

	useImperativeHandle(ref, () => ({
		addItemToCorb(item: Food) {
			const foundItem: CorbFood | undefined = items.find(
				(corbFood) => corbFood.name === item.name
			);
			if (foundItem) {
				foundItem.quantity += 1;
				setItems([...items]);
			} else {
				setItems([...items, { ...item, quantity: 1 }]);
			}
		},
	}));

	return (
		<Box className='corb-view' sx={{ ...commonStyles, borderRadius: 1 }}>
			<div className= "ItemCorb">
				{items.map((item) => {
					return <ItemCorb  food={item}></ItemCorb>;
				})}
			</div>
			
			<div className='calorie-total'>
				Total Calorie:
				{items.reduce(
					(previous, current) => previous + current.quantity * current.calorie,
					0
				)}
			</div>
		</Box>
	);
});

export default Corb;
