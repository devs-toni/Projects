import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom';
import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Courses from '../components/ITTraining/Courses';
import Curriculum from '../components/Curriculum/Curriculum';
import Projects from '../components/Projects/Projects';
import Err404 from '../components/Error404';
import Home from '../components/Home/Home';
import ConsoleAdmin from '../components/Admin/ConsoleAdmin';
import BackendProjects from '../components/Admin/BackendProjects';
import BackendAbout from '../components/Admin/BackendAbout';
import BackendCurriculum from '../components/Admin/BackendCurriculum';
import BackendITTraining from '../components/Admin/BackendITTraining';
import BackendContact from '../components/Admin/BackendContact';
import BackendHome from '../components/Admin/BackendHome';

const Address = () => {

    return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/cv' component={Curriculum} />
                    <Route exact path='/courses' component={Courses} />
                    <Route exact path='/projects' component={Projects} />
                    <Route exact path='/projects/calculator' />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/contact' component={Contact} />
                    <Route exact path='/admin' component={ConsoleAdmin} />
                    <Route exact path='/admin/projects' component={BackendProjects} />
                    <Route exact path='/admin/cv' component={BackendCurriculum} />
                    <Route exact path='/admin/courses' component={BackendITTraining} />
                    <Route exact path='/admin/about' component={BackendAbout} />
                    <Route exact path='/admin/contact' component={BackendContact} />
                    <Route exact path='/admin/home' component={BackendHome} />
                    <Route exact path='*' component={Err404} />
                </Switch>
            </HashRouter>
    );
};

export default Address;