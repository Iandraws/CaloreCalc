import { useRef } from 'react';
import { Food } from '../../../models/Food';
import Corb from '../corb/Corb';
import List from '../List/List';
import './View.scss';

function View(): JSX.Element {
	const corbRef = useRef() as any;
	const doSomething = (item: Food) => {
		corbRef.current.addItemToCorb(item);
	};

	return (
		<div className='view'>
			<div className='list'>
				<List doSomething={doSomething}></List>
			</div>
			<div className='corb'>
				<Corb ref={corbRef}></Corb>
			</div>
		</div>
	);
}

// React call method from child in parent

export default View;
