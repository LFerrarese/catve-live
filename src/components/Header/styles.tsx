import styled from 'styled-components/native';

import logo from './assets/catve.live.png';

export const Container = styled.View`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Logo = styled.Image.attrs({
	source: logo,
	resizeMode: 'center'
})`
	height: 80%;
`;
