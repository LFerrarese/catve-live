import React from 'react';
import { PlayerProvider } from './src/contexts/PlayerContext';

import Header from './src/components/Header';
import Player from './src/components/Player';
import Controls from './src/components/Controls';
import Footer from './src/components/Footer';

import { Container } from './src/styles';

const App: React.FC = () => {
	return (
		<PlayerProvider>
			<Container>
				<Header />

				<Player />

				<Controls />

				<Footer />
			</Container>
		</PlayerProvider>
	)
}

export default App;
