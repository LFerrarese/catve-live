import React, { ReactNode } from 'react';

import { LinearGradientBackground } from './styles';

interface GradientBackgroundProps {
	children: ReactNode;
	flex?: number;
};

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children, flex }) => {
	return (
		<LinearGradientBackground flex={flex}>
			{ children }
		</LinearGradientBackground>
	)
}

export default GradientBackground;
