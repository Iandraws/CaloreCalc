import React, { forwardRef, useImperativeHandle, useState } from 'react';
import { Food } from '../../../models/Food';
import Item from '../Item/Item';
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
{items.map((item) => {
				return (
					<div>
						<Item food={item} ></Item>
					</div>
				);
			})}
		</div>
	);
});

export default Corb;
