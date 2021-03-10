import React, { ReactNode } from 'react';
import { usePlayerContext } from '../../contexts/PlayerContext';

import { Touchable, Container, Text } from './styles';

type ButtonProps = {
	children: ReactNode;
	indexUri: number;
};

const Button: React.FC<ButtonProps> = (props) => {
	const { activeNamedUrl, changeUrl } = usePlayerContext();

	function handlePress() {
		changeUrl(props.indexUri);
	}

	return (
		<Touchable onPress={handlePress}>
			<Container backgroundColor={props.indexUri === activeNamedUrl ? "#F4A71B" : "white"}>
				<Text color={props.indexUri === activeNamedUrl ? "white" : "#3D3D3D"}>{ props.children }</Text>
			</Container>
		</Touchable>
	)
}

export default Button;
