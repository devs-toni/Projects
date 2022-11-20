import React, { useState } from 'react';
import Global from '../Global';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const New = () => {

  const initialState = {
    title: null,
    content: null,
    author: null
  };

  const url = Global.url;

  const [article, setarticle] = useState(initialState);

  const [redirect, setRedirect] = useState(false);

  // Referencia de los datos del formulario
  let titleRef = React.createRef();
  let contentRef = React.createRef();
  let authorRef = React.createRef();

  const changeState = () => {
    setarticle({
      title: titleRef.current.value,
      content: contentRef.current.value,
      author: authorRef.current.value
    });
  }

  const sendData = (e) => {
    // Evitamos que al escribir se recargue la pantalla
    e.preventDefault();
    changeState();

    // Petición HTTP Post para guardar el artículo
    axios.post(url + 'save', article).then(res => {
      setRedirect(true);
    });
  }

  if (redirect) {
    return <Navigate to='articles' />
  }

  return (
    <div className='nueva-publicacion'>
      <div id="formulario" className="card mx-auto mb-3 mt-5" style={{ width: '30em' }}>
        <div className="card-header text-dark">
          <h4>Publicar nuevo articulo</h4>
        </div>
        <div className="card-body">
          <form onSubmit={sendData}>
            <div className="mb-3">
              <label htmlFor="">Título</label>
              <input type="text" ref={titleRef} onChange={changeState} className='form-control' id='title' name='title' required />
            </div>
            <div className="mb-3">
              <label htmlFor="">Content</label>
              <textarea className='form-control' ref={contentRef} onChange={changeState} id='content' name='content' required rows='6' cols='30' />
            </div>
            <div className="mb-3">
              <label htmlFor="">Author</label>
              <input type="text" className='form-control' ref={authorRef} onChange={changeState} id='author' name='author' required />
            </div>
            <div className="mb-3">
              <input type='submit' id='publish' value='Enviar' className='form-control btn btn-primary' />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;