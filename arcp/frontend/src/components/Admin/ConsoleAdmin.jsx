import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../../assets/css/Admin/ConsoleAdmin.css';

const ConsoleAdmin = () => {

    let { url } = useRouteMatch();

    return (
        <div className="main">
            <div className='container mt-5 mb-5'>
                <div className="row-cols-6 d-flex flex-column justify-content-center text-center">
                    <Link className='link' to={`${url}/projects`}>Gestionar PROYECTOS</Link>
                    <Link className='link' to={`${url}/courses`}>Gestionar CURSOS</Link>
                    <Link className='link' to={`${url}/cv`}>Gestionar CURRICULUM</Link>
                    <Link className='link' to={`${url}/about`}>Gestionar SOBRE MÍ</Link>
                  {/*   <Link className='link' to={`${url}/contact`}>Ir a CONTACT</Link>
                    <Link className='link' to={`${url}/home`}>Ir a HOME</Link> */}
                </div>
            </div>
        </div>
    );
};

export default ConsoleAdmin;