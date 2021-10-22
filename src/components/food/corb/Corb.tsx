import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Food } from '../../../models/Food';
import './corb.scss';

const Corb = forwardRef((props, ref) => {
	const [items, setItems] = useState<Food[]>([]) ;

console.log(items);




	useImperativeHandle(ref, () => ({
		addItemToCorb(item: Food) {
const foundItem:any=items.find(element=>element.itemName===item.itemName)
if(foundItem){
foundItem.quantity+=1
setItems([...items])

}
else{
setItems([...items,item]);

	}
		},
		
		
		
	}));

	return (
		<div className='wrapper-corb'>
			<div> Corb List</div>
		</div>
	);
});

export default Corb;
