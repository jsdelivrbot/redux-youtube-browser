import React from 'react';

export const VideoListItem = ({ video, onVideoSelect }) => {
	const { snippet } = video
	const { title, thumbnails } = snippet
	const { url } = thumbnails.default

	return (
		<li className="list-group-item" onClick={() => onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={url} />
				</div>

				<div className="media-body">
					<div className="media-heading">
						{title}
					</div>
				</div>
			</div>
		</li>
	);
}
