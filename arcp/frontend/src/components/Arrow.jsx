import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Arrow.css';

const Arrow = ({ direction, previous, next }) => {
    return (
            <div className='back'>
                {(previous && direction === 'left') && <Link className='back-link' to={previous}><p className='arrow'>〈</p></Link>}
                {(next && direction === 'right') && <Link className='back-link' to={next}><p className='arrow'>〉</p></Link>}
            </div>
    )
}

export default Arrow