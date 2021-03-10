import React from 'react';

import Button from '../Button';

import { Container } from './styles';

const Controls: React.FC = () => {
	return (
		<Container>
			<Button indexUri={0}>Catve</Button>
			<Button indexUri={1}>Catve 2</Button>
			<Button indexUri={2}>Master TV</Button>
			<Button indexUri={3}>Catve FM</Button>
		</Container>
	)
}

export default Controls;
