import { useRef } from 'react';
import { Food } from '../../../models/Food';
import Corb from '../corb/Corb';
import Header from '../header/Header';
import List from '../List/List';
import './View.css';

function View(): JSX.Element {
	const corbRef = useRef() as any;
	const doSomething = (item: Food) => {
		corbRef.current.addItemToCorb(item);
	};

	return (
		<div className='container'>
			<div className='Header'>
				<Header></Header>
			</div>
			<div className='List'>
				<List doSomething={doSomething}></List>
			</div>
			<div className='Corb'>
				<Corb ref={corbRef}></Corb>
			</div>
			<div></div>
		</div>
	);
}

// React call method from child in parent

export default View;
