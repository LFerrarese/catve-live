import React from 'react';
import { PlayerProvider } from './contexts/PlayerContext';

import Header from './components/Header';
import Player from './components/Player';
import Controls from './components/Controls';
import Footer from './components/Footer';

import { Container } from './styles';

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
