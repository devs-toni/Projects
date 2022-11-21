import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import SpecificStudy from './SpecificStudy';
import Assembler from './SpecificStudy';
import '../../assets/css/Curriculum/Study.css';
import Global from '../../Global';
import axios from 'axios';

const Study = () => {

    let { topic } = useParams();

    const axiosUrl = Global.url;
    const [cvs, setcvs] = useState([]);
    const [topicStudy, setTopicStudy] = useState(null);
    const [describe, setdescribe] = useState([]);


    useEffect(() => {
        getCvs();
        findTopic();
        editDescription();
    }, [topic]);

    const getCvs = () => {
        axios.get(axiosUrl + 'getCvs').then(res => {
            res.status === 200 && setcvs(res.data.cvs);
        });
    };

    const findTopic = () => {
        if (cvs.length > 0) {
            const topicStudy = cvs.find(el => el.topic === topic);
            setTopicStudy(topicStudy);
        }
    }

    const editDescription = () => {
        console.log(topicStudy);
/*         if (topicStudy.description) setdescribe(topicStudy.description.split('|'));
 */    }

    return (
        <>
            { topicStudy
                ?
                <SpecificStudy
                    name={topicStudy.name}
                    center={topicStudy.center}
                    date={topicStudy.date}
                    description={describe}
                />
                :
                <h3>No hay información de esta actividad</h3>
            }
        </>

    )
    /*  return (
         <>
             {
                 topic === 'assembler' &&
                 <SpecificStudy
                     name='Master in Software Development'
                     school='Assembler Institute of Technology'
                     description='HTML + CCS'
                     data='October 2022 - June 2023' />
             }
             {
                 topic === 'front' &&
                 <SpecificStudy
                     name='Front-End Development'
                     school='Tokio School'
                     description=''
                     data='October 2022 - April 2023' />
             }
             {
                 topic === 'artifact' &&
                 <SpecificStudy
                     name='Backend Developer'
                     school='Artifact Consulting S.L'
                     description=''
                     data='May 2022 - October 2022' />
             }
             {
                 topic === 'java' &&
                 <SpecificStudy
                     name='Java Backend'
                     school='Tokio School'
                     description=''
                     data='December 2021 - May 2022' />
             }
             {
                 topic === 'sistemas' &&
                 <SpecificStudy
                     name='Sound Technician'
                     school='Sistemas 2 Valencia S.L'
                     description=''
                     data='July 2017 - March 2022' />
             }
             {
                 topic === 'cisco' &&
                 <SpecificStudy
                 name='Cisco CCNA v1' 
                 school='NetAcademy Cisco' 
                 description='' 
                 data='June 2017 - July 2017' />
             }
             {
                 topic === 'fp' &&
                 <SpecificStudy
                 name='Informatic and Telecommunications Installation' 
                 school='Vicente Blasco Ibañez' 
                 description='' 
                 data='September 2015 - June 2017' />
             }
         </>
     ) */
}

export default Study