import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import Global from '../../Global';
import { useEffect } from 'react';
import Arrow from '../Arrow';

const BackendCurriculum = () => {

  const url = Global.url;
  const [cv, setcv] = useState(null);
  const [cvs, setcvs] = useState([]);
  const [files, setFiles] = useState(null);

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
    const file = new FormData();
    file.append('file', files);
    file.append('name', cv.name);
    file.append('center', cv.center);
    file.append('date', cv.date);
    file.append('description', cv.description);
    file.append('topic', cv.topic);
    axios.post(`${url}saveCurriculum`, file);
  };

  useEffect(() => {
    getAllCvs();
  }, [cvs.length]);

  const getAllCvs = async () => {
    await axios.get(`${url}getCvs`).then(res => {
      setcvs(res.data.cvs);
    });
  };

  const handleRemove = async (e) => {
    await axios.delete(`${url}deleteCv/${e.target.id}`)
  }

  const uploadFile = (e) => {
    setFiles(e);
  }

  return (
    <div className="main">
      <Arrow direction='left' previous='/admin' />
      <h1 className='mb-4 text-center'>Añadir CV</h1>
      <div className='container text-center mt-5 mb-5'>
        <div className="row-cols-1">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" ref={nameRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="topic" className="form-label">Topic</label>
              <input type="text" className="form-control" id="topic" ref={topicRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="center" className="form-label">Center</label>
              <input type="text" className="form-control" id="center" ref={centerRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Date</label>
              <input type="text" className="form-control" id="date" ref={dateRef} onChange={changeState} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image</label>
              <input type="file" className="form-control" id="image" onChange={(e) => uploadFile(e.target.files[0])} />
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">Description</label>
              <textarea rows={20} className="form-control" id="desc" ref={descriptionRef} onChange={changeState} />
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
          </form>
        </div>
      </div>
      <h1 className='mb-4 text-center'>Ver Curriculums</h1>
      <div className='container mb-5 '>
        <table className="table table-bordered table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Center</th>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
              <th scope="col">Topic</th>
              <th scope="col">Image</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {

              cvs.map((cv, index) => {
                let style = {
                  cursor: 'pointer'
                }
                return (
                  <tr key={index}>
                    <th scope="row">{cv.id}</th>
                    <td>{cv.name}</td>
                    <td>{cv.center}</td>
                    <td>{cv.date}</td>
                    <td>{cv.description}</td>
                    <td>{cv.topic}</td>
                    <td>{cv.image}</td>
                    <td><svg onClick={handleRemove} id={cv.id} xmlns="http://www.w3.org/2000/svg" width="26" style={style} height="26" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path onClick={handleRemove} id={cv.id} d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                    </svg></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BackendCurriculum;