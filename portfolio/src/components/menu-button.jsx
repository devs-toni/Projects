import React from 'react';
import '../styles/menu-button.css';

export function Button ({ value, click }) {
    return(
        <>
            <button className='menu-button' onClick={click}>{value}</button>
        </>
    )
}