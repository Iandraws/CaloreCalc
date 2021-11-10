import React from 'react';
import { Food } from '../../../models/Food';
import Item from '../Item/Item';
import './List.scss';

function List({ doSomething }: any) {
	const foods: Food[] = [
		{
			name: 'Apple',
			calorie: 100,
			imageUrl:
				'https://res.cloudinary.com/mindchase/image/upload/v1634928182/appel_zairoq.jpg',
		},
		{
			name: 'Ananas',
			calorie: 200,
			imageUrl:
				'https://res.cloudinary.com/mindchase/image/upload/v1634928426/ananasleder_sscc6h.jpg',
		},
		{
			name: 'Burger',
			calorie: 300,
			imageUrl:
				'https://res.cloudinary.com/mindchase/image/upload/v1634928503/burger_zcozim.jpg',
		},
		{
			name: 'Carrot',
			calorie: 60,
			imageUrl:
				'https://res.cloudinary.com/mindchase/image/upload/v1634928984/carrot-isolated-white-background-109799060_ksfikg.jpg',
		},
	
	];

	return (
		<div className='foods-wrapper'>
			{foods.map((food) => {
				return <Item food={food} doSomething={doSomething}></Item>;
			})}
		</div>
	);
}

export default List;
