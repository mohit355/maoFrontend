import React, { useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';

import { Container } from './styles';

const Menu = () => {
	const [itemCount, setItemCount] = useState(1);
	return (
		<Container>
			<Header itemCount={itemCount} />
			<CardContainer itemCount={itemCount} setItemCount={setItemCount} />
		</Container>
	);
};

export default Menu;
