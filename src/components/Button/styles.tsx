import styled from 'styled-components/native';

interface ButtonProps {
	backgroundColor?: string;
	color?: string;
};

export const Touchable = styled.TouchableWithoutFeedback`
	flex: 1;
`

export const Container = styled.View<ButtonProps>`
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;

	padding: 18px;

	background-color: ${props => props.backgroundColor ?? "white"};

	border-radius: 125px;
`

export const Text = styled.Text<ButtonProps>`
	font-size: 25px;

	color: ${props => props.color ?? "#3D3D3D"};
`;
