import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import SpecificStudy from './SpecificStudy';
import Assembler from './SpecificStudy';
import '../../assets/css/Curriculum/Study.css';

const Study = () => {

    let { topic } = useParams();

    return (
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
    )
}

export default Study