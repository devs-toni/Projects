import React from 'react'
import Timegraphic from './specific/Timegraphic';
import '../styles/curriculum.css';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { FaBeer } from 'react-icons/fa';
import Study from './specific/Study';
import { Transition } from './specific/Transition';

const Curriculum = () => {
  let { path, url } = useRouteMatch();
  const newLocal = '🌍';
  return (
    <div className='cv'>
      <Timegraphic url={`${url}`} />
      <div className="welcome-div">
        <span className='welcome'>Welcome to my &#123; &lt; </span>
        <Transition className='welcome change' />
        <span className='welcome'>&gt; &#125;, I hope you enjoy it.</span>
      </div>

      <Switch>
        <Route exact path={path}>
        </Route>
        <Route path={`${path}/:topic`} component={Study}></Route>
      </Switch>
    </div>
  );
};

export default Curriculum;