import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Articles from './components/Articles';
import Header from './components/Header';
import New from './components/New';

const Router = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path='/' element={<New />} />
                <Route exact path='/articles' element={<Articles />} />
            </Routes>
        </>
    );

};

export default Router;