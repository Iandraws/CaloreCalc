import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import './Item.scss';
function Item({ food, doSomething }: any): JSX.Element {
	return (
		// <div className='food-wrapper' onClick={() => doSomething(food)}>
		// 	<div className='food-name'>{food.itemName}</div>
		// 	<img className='food-img' alt='pic' src={food.imageUrl} />
		// 	{food.quantity!==0 &&<div className= 'food-quantity'>{food.quantity}</div> }
		// </div>
		<Card   onClick={() => doSomething(food)} className='Card' sx={{ maxWidth: 345 }}>
		<CardHeader
		  action={
			<IconButton aria-label="settings">
			</IconButton>
		  }
		  title={food.name}
		/>
		<CardMedia
		  component="img"
		  height="194"
		  image={food.imageUrl}
		  alt="Paella dish"
		/>
	  </Card>
	);
}

export default Item;
