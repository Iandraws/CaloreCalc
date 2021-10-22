import React from 'react';
import './Item.scss';

function Item({ food, doSomething }: any): JSX.Element {
	return (
		<div className='food-wrapper' onClick={() => doSomething(food)}>
			<div>{food.itemName}</div>
		</div>
	);
}

export default Item;
