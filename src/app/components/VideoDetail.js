import React from 'react';

export const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>Loading...</div>
	}
	
	const { id, snippet } = video
	const { videoId } = id
	const { title, description } = snippet
	
	return (
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`}></iframe>
			</div>
			<div className="details">
				<div>{title}</div>
				<div>{description}</div>
			</div>
		</div>
	);
}
