import React, { useEffect, useState } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import Study from './Study';
import Timegraphic from './Timegraphic';
import '../../assets/css/Curriculum/Curriculum.css';


const Curriculum = () => {
  let { path, url } = useRouteMatch();

  return (
    <div className='cv' >
      <Timegraphic url={`${url}`} />
      <Switch>
        <Route exact path={path}></Route>
        <Route path={`${path}/:topic`} component={Study}></Route>
      </Switch>
    </div>
  );
};

export default Curriculum;