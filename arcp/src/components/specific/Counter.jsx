import React from 'react';
import '../../styles/counter.css';
import CountUp from 'react-countup';

const Counter = ({hours}) => {
  return (
    <div className='counter'>
        <CountUp className='hours' start={0} end={2200} duration={5} />
        <span className='p-hours'>Hours</span>
    </div>
  )
}

export default Counter