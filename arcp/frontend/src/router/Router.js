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
import Login from '../components/Admin/Login';
import PrivateRoute from '../components/PrivateRoute';

const Address = () => {

    return (
        <HashRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/cv' component={Curriculum} />
                <Route exact path='/courses' component={Courses} />

                <Route exact path='/projects' component={Projects} />
                <Route path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />

                <Route exact path='/login' component={Login} />

                <PrivateRoute exact path='/admin' component={ConsoleAdmin} />
                <PrivateRoute exact path='/admin/projects' component={BackendProjects} />
                <PrivateRoute exact path='/admin/cv' component={BackendCurriculum} />
                <PrivateRoute exact path='/admin/courses' component={BackendITTraining} />
                <PrivateRoute exact path='/admin/about' component={BackendAbout} />
                <PrivateRoute exact path='/admin/contact' component={BackendContact} />
                <PrivateRoute exact path='/admin/home' component={BackendHome} />

                <Route exact path='*' component={Err404} />
            </Switch>
        </HashRouter>
    );
};

export default Address;