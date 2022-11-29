import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Arrow.css';

const Arrow = ({ direction, previous, next }) => {
    return (
            <div className='back'>
                {(previous && direction === 'left') && <Link className='back-link' to={previous}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></Link>}
                {(next && direction === 'right') && <Link className='back-link' to={next}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="" class="arrow" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></Link>}
            </div>
    )
}

export default Arrow