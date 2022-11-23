import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Global from '../../Global';
import { Redirect } from 'react-router-dom';

const BackendCurriculum = () => {

  const url = Global.url;
  const [cv, setcv] = useState(null);
  const [redirect, setredirect] = useState(false);

  const nameRef = React.createRef();
  const centerRef = React.createRef();
  const dateRef = React.createRef();
  const descriptionRef = React.createRef();
  const topicRef = React.createRef();

  const changeState = () => {
    setcv({
      name: nameRef.current.value,
      center: centerRef.current.value,
      date: dateRef.current.value,
      description: descriptionRef.current.value,
      topic: topicRef.current.value,
    });
  }

  const sendData = (e) => {
    e.preventDefault();
    changeState();

    axios.post(url + 'saveCv', cv).then(res => {
      setredirect(true);
    })
  };

  if (redirect) return <Redirect to='/admin' />

  return (
    <div className="main">
      <div className='container text-center mt-5 mb-5'>
        <div className="row-cols-1">
          <h1 className='mb-4'>Curriculum</h1>
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" ref={nameRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">Topic Hidden</label>
              <input type="text" className="form-control" id="topic" ref={topicRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="center" className="form-label">Centro</label>
              <input type="text" className="form-control" id="center" ref={centerRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Fecha</label>
              <input type="text" className="form-control" id="date" ref={dateRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Descripción</label>
              <textarea rows={20} className="form-control" id="desc" ref={descriptionRef} onChange={changeState} />
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BackendCurriculum;