import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientProps {
	flex?: number;
};

export const LinearGradientBackground = styled(LinearGradient).attrs({
	colors: ['#F4A71B', '#A40F39', '#81134D'],
	start: {
		x: 0,
		y: 1
	},
	end: {
		x: 1,
		y: 0
	}
})<GradientProps>`
	flex: ${props => props.flex ?? 1};
`
