import { useRef } from 'react';
import { Food } from '../../../models/Food';
import Corb from '../corb/Corb';
import List from '../List/List';

function View(): JSX.Element {
	const corbRef = useRef() as any;
	const doSomething = (item: Food) => {
		corbRef.current.addItemToCorb(item);
		
	};

	return (
		<div>
			<List doSomething={doSomething}></List>
			<Corb ref={corbRef}></Corb>
		</div>
	);
}

// React call method from child in parent

export default View;
