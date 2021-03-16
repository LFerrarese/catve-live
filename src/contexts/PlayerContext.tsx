import React, {
	useState,
	useContext,
	createContext,
	ReactNode
} from 'react';

interface PlayerContextData {
	url: string;
	activeNamedUrl: number;
	changeUrl: (index: number) => void;
};

interface PlayerProviderProps {
	children: ReactNode;
};

export const PlayerContext = createContext({} as PlayerContextData);

export const PlayerProvider: React.FC<PlayerProviderProps> = ({ children }) => {
	const [url, setUrl] = useState<string>("https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8");
	const [activeNamedUrl, setActiveNamedUrl] = useState<number>(0);

	const namedUrls = [
		"https://5b33b873179a2.streamlock.net:1443/live/livestream/playlist.m3u8",
		"https://5b33b873179a2.streamlock.net:1443/catve2/catve2/playlist.m3u8",
		"https://5b33b873179a2.streamlock.net:1443/mastertv/livestream/playlist.m3u8",
		"https://5b33b873179a2.streamlock.net:1443/radiocamera/livestream/playlist.m3u8"
	]

	function changeUrl(index: number) {
		if (index !== activeNamedUrl) {
			setUrl(namedUrls[index]);
			setActiveNamedUrl(namedUrls.indexOf(namedUrls[index]));
		}
	}

	return (
		<PlayerContext.Provider value={{
			url,
			activeNamedUrl,
			changeUrl
		}}>
			{ children }
		</PlayerContext.Provider>
	)
}

export const usePlayerContext = () => useContext(PlayerContext);
