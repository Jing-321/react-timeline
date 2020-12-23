import React from 'react';
import './TimelineEvent.css';
import Timestamp from './Timestamp';

const TimelineEvent = (props) => {
  
  return(
    <div className='timeline-event'>
      <div className='event-person'>{props.person} </div>
      <div className='event-time'><Timestamp time={props.timeStamp}/></div>
      <p className='event-status'> {props.status}</p>
    </div>
  );
}

export default TimelineEvent;