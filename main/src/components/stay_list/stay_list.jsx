import React from 'react';
import StayItem from '../stay_item/stay_item';
import styles from './stay_list.module.css';

const StayList = (props) => (
           <ul className={styles.stays}>
                {props.stays.map(video => (
                    <StayItem key={video.id} video={video} />
                ))}
           </ul> 
    );

export default StayList;