import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import '../../assets/css/Curriculum/TopicCurriculum.css';
import Global from '../../Global';
import axios from 'axios';

const TopicCurriculum = () => {

    let { topic } = useParams();
    const [info, setInfo] = useState({});
    const [description, setDescription] = useState([]);
    const backendUrl = Global.url;

    useEffect(() => {
        axios.post(`${backendUrl}getCurriculum`, { topic }).then(res => {
            setInfo(res.data.cv[0]);
            setDescription([...res.data.cv[0].description.split(',')]);
            console.log(description);
        });
    }, [topic]);


    return (
        <>
            {info &&
                <div className='study'>
                    <div className='name'>
                        <p className='text-name'>{info.name}</p>
                        <p className='school'>{info.center}</p>
                        <p className='data'>{info.date}</p>
                    </div>
                    <div className='description'>
                        <ul className='text-description'>
                            {description.map((line, key) =>
                                <li className='li' key={key}>{line}</li>
                            )}
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}

export default TopicCurriculum;