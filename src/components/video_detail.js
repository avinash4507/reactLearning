import React from 'react';

const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading Video...</div>
    }
    const videoId = video.id.videoId;
    const videoUrl = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={videoUrl}></iframe>
            </div>
            <div className="video-details">
                <h5>{video.snippet.title}></h5>
                <h7>{video.snippet.description}></h7>
            </div>
        </div>
    );
}

export default VideoDetail;