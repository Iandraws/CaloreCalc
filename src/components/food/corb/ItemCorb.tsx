import * as React from 'react';
import './ItemCorb.scss';
function Item({ food, doSomething }: any): JSX.Element {
	return (
		<div className='food-wrapper' onClick={() => doSomething(food)}>
			<div className='food-name'>{food.itemName}</div>
			<img className='food-img' alt='pic' src={food.imageUrl} />
			{food.quantity!==0 &&<div className= 'food-quantity'>{food.quantity}</div> }
		</div>

	);
}

export default Item;
