import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className='timeline-event'>
      <div className='event-person'>{props.person} </div>
      <Timestamp time={props.timeStamp} className='event-time'/>
      <p className='event-status'> {props.status}</p>
    </div>
  );
}

export default TimelineEvent;