import React, { useState } from 'react'
import '../../assets/css/Admin/Login.css';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Global from '../../Global';

const Login = () => {

    const backendUrl = Global.url;
    const [token, setToken] = useState();
    const [user, setuser] = useState();
    const [auth, setAuth] = useState(null);

    const usernameRef = React.createRef();
    const passwordRef = React.createRef();

    const changeState = () => {
        setuser({
            username: usernameRef.current.value,
            password: passwordRef.current.value
        });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        changeState();
        axios.post(backendUrl + 'login', user).then(res => {
            if (res.data.token) {
                setToken(res.data.token);
                setAuth(true);
            }
            else {
                setToken('notAuth'); 
                setAuth(false);
            }
        });
    };

    if (auth) return <Redirect to='/admin' />
    else if (!auth && token) return <Redirect to='/' />
    else if ( !auth && !token) {
        return (
            <div className='container mb-5 login'>
                <div className="row-cols-1 text-center mt-5 mb-3 d-flex flex-column align-items-center">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mt-5 mb-5">
                            <label htmlFor="user" className="form-label">User</label>
                            <input type="text" className="form-control" id="user" aria-describedby="emailHelp" ref={usernameRef} onChange={changeState} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input className="form-control" id="password" type='password' ref={passwordRef} onChange={changeState} />
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;