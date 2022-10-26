import React from 'react';
import '../styles/menu.css';
import { Button } from './menu-button';

export function Menu () {
    return (
        <div className='menu-div'>
            <Button value='IT Training'></Button>
            <Button value='Projects'></Button>
            <Button value='Curriculum'></Button>
            <Button value='About Me'></Button>
            <Button value='Contact'></Button>
        </div>
    );
}