import React from 'react'
import { BrowserRouter, HashRouter, Route , Switch } from 'react-router-dom';
import About from '../components/About';
import Contact from '../components/Contact';
import Courses from '../components/Courses';
import Curriculum from '../components/Curriculum';
import Projects from '../components/Projects';
import Err404 from '../components/main/Err404';

const Address = () => {
  return (
        <BrowserRouter>
            <HashRouter>
                <Switch>
                    <Route exact path='/cv' component={Curriculum} />
                    <Route exact path='/courses' component={Courses} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='*' component={Err404} />
                </Switch>
            </HashRouter>
        </BrowserRouter>
    );
};

export default Address;