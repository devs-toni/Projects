import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import TopicCurriculum from './TopicCurriculum';
import Timegraphic from './Timegraphic';
import '../../assets/css/Curriculum/Curriculum.css';
import DigitalSkill from './DigitalSkill';
import Global from '../../Global';
import axios from 'axios';


const Curriculum = () => {

  let { path, url } = useRouteMatch();
  const [skills, setSkills] = useState([])
  const backendUrl = Global.url;

  useEffect(() => {
    axios.get(`${backendUrl}getSkills`).then(res => {
      setSkills(res.data.skills);
    });
  }, []);

  return (
    <div className="curriculum">
      <div className='info'>
        <h1 className='title'>Currículum</h1>
        <p className='description'>En esta sección, podrás encontrar tanto mi perfil profesional como educativo, completo y temporalmente etiquetado.</p>
      </div>
      <div className='cv' >
        <Timegraphic url={`${url}`} />
        <div className='explanation'>
          <Switch>
            <Route exact path={path}></Route>
            <Route path={`${path}/:topic`} component={TopicCurriculum}></Route>
          </Switch>
        </div>
        <div className='skills'>
          <div className="digital-skills">
            <p className="title">Habilidades digitales</p>
            {skills.map(skill => skill.section === 'Digital' && <DigitalSkill key={skill.id} {...skill} />)}
          </div>
          <div className="other">
            <div className="digital-skills">
              <p className="title">Idiomas</p>
              {skills.map(skill => skill.section === 'Language' && <DigitalSkill key={skill.id} {...skill} />)}
            </div>
            <div className="digital-skills">
              <p className="title">Soft Skills</p>
              {skills.map(skill => skill.section === 'Soft' && <DigitalSkill key={skill.id} {...skill} />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;