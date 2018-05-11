import React from 'react';

import { VideoListItem } from './VideoListItem';

export const VideoList = ({ videos, onVideoSelect }) => {
	return (
		<ul className="col-md-4 list-group">
			{videos.map(video => <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />)}
		</ul>
	);
}
