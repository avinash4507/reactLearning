import React from 'react';

const VideolistItem = ({ video, onVideoSelect }) => {
    const { thumbnails, title } = video.snippet;
    const imageUrl = thumbnails.default.url;
    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <h7 className="media-heading">{title}</h7>
                </div>
            </div>
        </li>
    );
}

export default VideolistItem;