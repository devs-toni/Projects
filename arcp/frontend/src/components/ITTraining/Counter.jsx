import React from 'react';
import '../../assets/css/ITTraining/Counter.css';
import CountUp from 'react-countup';

const Counter = ({hours}) => {
  return (
    <div className='counter'>
        <CountUp className='hours main' start={0} end={hours} duration={5} />
        <span className='p-hours'>Horas</span>
    </div>
  )
}

export default Counter