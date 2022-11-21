import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Courses from '../components/ITTraining/Courses';
import Curriculum from '../components/Curriculum/Curriculum';
import Projects from '../components/Projects/Projects';
import Err404 from '../components/Error404';
import Home from '../components/Home/Home';

const Address = () => {

    return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/cv' component={Curriculum} />
                    <Route exact path='/courses' component={Courses} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='*' component={Err404} />
                </Switch>
            </HashRouter>
    );
};

export default Address;