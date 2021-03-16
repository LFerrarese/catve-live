import React from 'react';
import Video from 'react-native-video';
import { usePlayerContext } from '../contexts/PlayerContext';

const Player: React.FC = () => {
	const { url } = usePlayerContext();

	function handleError() {}

	return (
		<React.Fragment>
			<Video
				source={{ uri: url }}
				playInBackground={true}
				pictureInPicture={true}
				controls={true}
				fullscreenAutorotate={true}
				resizeMode="cover"
				style={{
					flex: 3
				}}
				onError={handleError}
			/>
		</React.Fragment>
	)
}

export default Player;
