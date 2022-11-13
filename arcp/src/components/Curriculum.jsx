import React from 'react'
import Timegraphic from './specific/Timegraphic';
import '../styles/curriculum.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Study from './specific/Study';
const Curriculum = () => {
  let { path, url } = useRouteMatch();
  return (
    <div className='cv'>
      <Timegraphic url={`${url}`} />
      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:topic`} component={Study}></Route>
      </Switch>
    </div>
  );
};

export default Curriculum;