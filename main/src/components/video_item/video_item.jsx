import React from 'react';
import styles from './video_item.module.css';

//props를 ({video: {snippet}})로 바꾸면 아래 props.video 경로를 바로 snippet로 바꿀수있다
const VideoItem = ({video: {snippet}}) => (
    <li className={styles.container}>
        <div className={styles.video}>
            <img
                className={styles.thumbnail}
                src={snippet.thumbnails.medium.url}
                alt="video thumbnail"
            />
            <div className={styles.metadata}>
                <p className={styles.title}>{snippet.title}</p>
                <p className={styles.channel}>{snippet.channelTitle}</p>
            </div>
        </div>
    </li>
);

export default VideoItem;