import React from 'react';

import GradientBackground from '../GradientBackground';

import { Container, Logo } from './styles';

const Header: React.FC = () => {
	return (
		<GradientBackground>
			<Container>
				<Logo />
			</Container>
		</GradientBackground>
	)
}

export default Header;
