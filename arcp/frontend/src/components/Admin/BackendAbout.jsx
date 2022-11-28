import axios from 'axios';
import React, { useState } from 'react'
import { Redirect } from 'react-router-dom';
import Global from '../../Global';

const BackendAbout = () => {

  const url = Global.url;
  const [about, setAbout] = useState({});
  const [redirect, setRedirect] = useState(false)

  const topicRef = React.createRef();
  const textRef = React.createRef();

  const changeState = () => {
    setAbout({
      topic: topicRef.current.value,
      text: textRef.current.value
    });
  }

  const sendData = (e) => {
    e.preventDefault();
    changeState();

    axios.post(`${url}saveAboutMe`, about).then(res => {
      setRedirect(true);
    });
  }

  if (redirect) {
    return <Redirect to='/admin' />
  }

  return (
    <div className="main">
      <div className='container text-center mt-5 mb-5'>
        <div className="row-cols-1">
          <h1 className='mb-4'>About</h1>
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">Topic</label>
              <input type="text" className="form-control" id="topic" ref={topicRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">Text</label>
              <textarea rows='50' className="form-control" id="text" ref={textRef} onChange={changeState}></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default BackendAbout