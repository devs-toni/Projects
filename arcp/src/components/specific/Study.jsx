import React from 'react'
import { useParams } from 'react-router-dom';
import '../../styles/study.css';

const Study = () => {

    let { topic } = useParams();

    return (
        <div className='study'>
            {`Sección de ${topic}`}
        </div>
    )
}

export default Study