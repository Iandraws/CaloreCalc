import React from 'react';
import { Food } from '../../../models/Food';
import Item from '../Item/Item';
import './List.scss';

function List({ doSomething }: any) {
	const foods: Food[] = [
		{ itemName: 'appel', quantity: 0, calorie: 100 },
		{ itemName: 'anans', quantity: 0, calorie: 200 },
		{ itemName: 'burger', quantity: 0, calorie: 300 },
		{ itemName: 'carrot', quantity: 0, calorie: 60 },
	];

	return (
		<div className='foods-wrapper'>
			{foods.map((food) => {
				return (
					<div>
						<Item food={food} doSomething={doSomething}></Item>
					</div>
				);
			})}
		</div>
	);
}

export default List;
