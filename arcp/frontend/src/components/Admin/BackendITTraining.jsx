import React from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const BackendITTraining = () => {

  const backendUrl = Global.url;

  const [course, setCourse] = useState({
      name: null,
      center: null,
      hours: null,
      link: null
  });
  const [files, setFiles] = useState(null);
  const [redirect, setRedirect] = useState(false);

  let nameRef = React.createRef();
  let centerRef = React.createRef();
  let hoursRef = React.createRef();
  let linkRef = React.createRef();

  const changeState = () => {
      setCourse({
          name: nameRef.current.value,
          center: centerRef.current.value,
          hours: hoursRef.current.value,
          link: linkRef.current.value,
      });
  }

  const uploadFile = (e) => {
      setFiles(e);
  }

  const sendData = async (e) => {
      e.preventDefault();
      changeState();
      const file = new FormData();
      file.append('file', files);
      file.append('name', course.name);
      file.append('center', course.center);
      file.append('hours', course.hours);
      file.append('link', course.link);

      await axios.post(backendUrl + 'saveCourse', file).then(res => {
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
        <h1 className='mb-4'>Cursos</h1>
        <form onSubmit={sendData}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="name" ref={nameRef} onChange={changeState} />
          </div>
          <div className="mb-3">
            <label htmlFor="center" className="form-label">Centro</label>
            <input type="text" className="form-control" id="center" ref={centerRef} onChange={changeState} />
          </div>
          <div className="mb-3">
            <label htmlFor="hours" className="form-label">Horas</label>
            <input type="text" className="form-control" id="hours" ref={hoursRef} onChange={changeState} />
          </div>
          <div className="mb-3">
            <label htmlFor="link" className="form-label">Link</label>
            <input rows={20} className="form-control" id="link" ref={linkRef} onChange={changeState} />
          </div>
          <div className="mb-3">
            <label htmlFor="image" className="form-label">Imagen</label>
            <input type='file' className="form-control" id="image" onChange={(e) => uploadFile(e.target.files[0])} />
          </div>
          <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
      </div>
        </div>
    </div>
  )
}

export default BackendITTraining