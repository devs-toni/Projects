import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import Global from '../../Global';
import Arrow from '../Arrow';

const BackendAbout = () => {

  const url = Global.url;
  const [about, setAbout] = useState({});
  const [allAbout, setAllAbout] = useState([]);

  const topicRef = React.createRef();
  const textRef = React.createRef();

  const changeState = () => {
    setAbout({
      topic: topicRef.current.value,
      text: textRef.current.value
    });
  }

  useEffect(() => {
    getAllAbout();
  }, []);

  const handleRemove = async (e) => {
    await axios.delete(`${url}deleteAbout/${e.target.id}`);
    getAllAbout();
  }

  const getAllAbout = async () => {
    await axios.get(`${url}getAllAbout`).then(res => {
      setAllAbout(res.data.allAbout);
    });
  }

  const sendData = (e) => {
    e.preventDefault();
    changeState();
    axios.post(`${url}saveAboutMe`, about);
    getAllAbout();
  }

  return (
    <div className="main">
      <Arrow direction='left' previous='/admin' />
      <h1 className='mb-4 text-center'>Añadir About</h1>
      <div className='container text-center mt-5 mb-5'>
        <div className="row-cols-1">
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
      <h1 className='text-center mb-5'>Añadir About</h1>
      <div className="container mb-5">
        <table className="table table-bordered table-light">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Topic</th>
              <th scope="col">Text</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {
              allAbout.map((ab, index) => {
                let style = {
                  cursor: 'pointer'
                }
                return (
                  <tr key={index}>
                    <th scope="row">{ab.id}</th>
                    <td>{ab.topic}</td>
                    <td>{ab.text}</td>
                    <td><svg onClick={handleRemove} id={ab.id} xmlns="http://www.w3.org/2000/svg" width="26" style={style} height="26" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                      <path onClick={handleRemove} id={ab.id} d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
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

export default BackendAbout