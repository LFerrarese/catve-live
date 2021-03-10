import React from 'react';
import { Linking } from 'react-native';

import GradientBackground from '../GradientBackground';

import { Container, Text } from './styles';

const Footer: React.FC = () => {
	function handlePress() {
		return Linking.openURL("https://catve.com");
	}

	return (
		<GradientBackground flex={0.75}>
			<Container onPress={handlePress}>
				<Text>Acesse o Portal Catve</Text>
			</Container>
		</GradientBackground>
	)
}

export default Footer;
