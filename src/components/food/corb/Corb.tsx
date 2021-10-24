import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { CorbFood, Food } from '../../../models/Food';
import Item from '../Item/Item';
import './corb.scss';

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
		<div className='corb-view'>
			<div className='wrapper-corb'>
				{items.map((item) => {
					return <Item food={item}></Item>;
				})}
			</div>
			<div className='calorie-total'>
				Total Calorie:
				{items.reduce(
					(previous, current) => previous + current.quantity * current.calorie,
					0
				)}
			</div>{' '}
		</div>
	);
});

export default Corb;
