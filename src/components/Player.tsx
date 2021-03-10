import React from 'react';
import { ActivityIndicator, Alert } from 'react-native';
import Video from 'react-native-video';
import { usePlayerContext } from '../contexts/PlayerContext';

const Player: React.FC = () => {
	const { url, loading } = usePlayerContext();

	function handleError() {
		Alert.alert("Por favor, verifique sua conexão com a internet.");
	}

	return (
		<React.Fragment>
			{ !loading ? (
				<Video
					source={{ uri: url }}
					playInBackground={true}
					pictureInPicture={true}
					playWhenInactive={true}
					controls={true}
					fullscreenAutorotate={true}
					resizeMode="cover"
					style={{
						flex: 3
					}}
					onError={handleError}
				/>
			) : (
				<ActivityIndicator color="orange" size="large" style={{ flex: 3 }} />
			) }
		</React.Fragment>
	)
}

export default Player;
