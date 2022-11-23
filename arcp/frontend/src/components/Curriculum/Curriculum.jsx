import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import Study from './Study';
import Timegraphic from './Timegraphic';
import '../../assets/css/Curriculum/Curriculum.css';


const Curriculum = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className="curriculum">
      <div className='info'>
        <h1 className='title'>Currículum</h1>
        <p className='description'>In this section, you can take a look at my professional career.</p>
      </div>
      <div className='cv' >
        <Timegraphic url={`${url}`} />
        <Switch>
          <Route exact path={path}></Route>
          <Route path={`${path}/:topic`} component={Study}></Route>
        </Switch>
      </div>
    </div>
  );
};

export default Curriculum;