import React, { useEffect } from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Arrow from '../Arrow';

const BackendITTraining = () => {

  const backendUrl = Global.url;

  const [course, setCourse] = useState({
    name: null,
    center: null,
    hours: null,
    link: null,
    position: null,
    ref: null,
    description: null,
    technologies: null,
    color: null,
    border: null,
  });

  const [files, setFiles] = useState(null);
  const [courses, setCourses] = useState([]);

  let nameRef = React.createRef();
  let centerRef = React.createRef();
  let hoursRef = React.createRef();
  let linkRef = React.createRef();
  let positionRef = React.createRef();
  let refRef = React.createRef();
  let descriptionRef = React.createRef();
  let technologiesRef = React.createRef();
  let colorRef = React.createRef();
  let borderRef = React.createRef();

  const changeState = () => {
    setCourse({
      name: nameRef.current.value,
      center: centerRef.current.value,
      hours: hoursRef.current.value,
      link: linkRef.current.value,
      position: positionRef.current.value,
      ref: refRef.current.value,
      description: descriptionRef.current.value,
      technologies: technologiesRef.current.value,
      color: colorRef.current.value,
      border: borderRef.current.value,
    });
  }

  const uploadFile = (e) => {
    setFiles(e);
  }

  useEffect(() => {
    getAllCourses();
  }, []);

  const handleRemove = async (e) => {
    await axios.delete(`${backendUrl}deleteCourse/${e.target.id}`);
    getAllCourses();
  }

  const getAllCourses = async () => {
    await axios.get(`${backendUrl}getCourses`).then(res => {
      setCourses(res.data.courses);
    });
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
    file.append('position', course.position);
    file.append('ref', course.ref);
    file.append('description', course.description);
    file.append('technologies', course.technologies);
    file.append('color', course.color);
    file.append('border', course.border);

    await axios.post(backendUrl + 'saveCourse', file);
    getAllCourses();
  }

  return (
    <div className="main">
      <Arrow direction='left' previous='/admin' />
      <h1 className='mb-4 text-center'>Añadir Curso</h1>
      <div className='container text-center mt-5 mb-5'>
        <div className="row-cols-1">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="position" className="form-label">Position</label>
              <input type="text" className="form-control" id="position" ref={positionRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" ref={nameRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="center" className="form-label">Center</label>
              <input type="text" className="form-control" id="center" ref={centerRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="hours" className="form-label">Hours</label>
              <input type="text" className="form-control" id="hours" ref={hoursRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="link" className="form-label">Link</label>
              <input className="form-control" id="link" ref={linkRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="ref" className="form-label">Ref</label>
              <input className="form-control" id="ref" ref={refRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">Description</label>
              <input className="form-control" id="description" ref={descriptionRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="technologies" className="form-label">Technologies</label>
              <input className="form-control" id="technologies" ref={technologiesRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="color" className="form-label">Color</label>
              <input className="form-control" id="color" ref={colorRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="border" className="form-label">Border</label>
              <input className="form-control" id="border" ref={borderRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input type='file' className="form-control" id="image" onChange={(e) => uploadFile(e.target.files[0])} />
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
      <h1 className='text-center mb-5'>Ver Cursos</h1>
      <div className='mb-5'>
        <table className="table table-bordered table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Center</th>
              <th scope="col">Hours</th>
              <th scope="col">Link</th>
              <th scope="col">Position</th>
              <th scope="col">Image</th>
              <th scope="col">Ref</th>
              <th scope="col">Description</th>
              <th scope="col">Technologies</th>
              <th scope="col">Color</th>
              <th scope="col">Border</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              courses.map((course, index) => {
                let style = {
                  cursor: 'pointer'
                }
                return (
                  <tr key={index}>
                    <th scope="row">{course.id}</th>
                    <td>{course.name}</td>
                    <td>{course.center}</td>
                    <td>{course.hours}</td>
                    <td>{course.link}</td>
                    <td>{course.position}</td>
                    <td>{course.image}</td>
                    <td>{course.ref}</td>
                    <td>{course.description}</td>
                    <td>{course.technologies}</td>
                    <td>{course.color}</td>
                    <td>{course.border}</td>
                    <td><svg onClick={handleRemove} id={course.id} xmlns="http://www.w3.org/2000/svg" width="26" style={style} height="26" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path onClick={handleRemove} id={course.id} d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default BackendITTraining