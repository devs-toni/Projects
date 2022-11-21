import React from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const BackendProjects = () => {

    const backendUrl = Global.url;

    const [project, setProject] = useState({
        name: null,
        description: null,
    });
    const [files, setFiles] = useState(null);
    const [redirect, setRedirect] = useState(false);

    // Referencia de los datos del formulario
    let nameRef = React.createRef();
    let descriptionRef = React.createRef();

    const changeState = () => {
        setProject({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
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
        file.append('name', project.name);
        file.append('description', project.description);

        await axios.post(backendUrl + 'saveProject', file).then(res => {
            setRedirect(true);
        });
    }

    if (redirect) {
        return <Redirect to='/admin' />
    }

    return (
        <div className='container mb-5 '>
            <div className="row-cols-1 text-center mt-5 mb-3 d-flex flex-column justify-content-center">
                <h1>PROYECTOS</h1>
                <form onSubmit={sendData}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nombre</label>
                        <input type="text" className="form-control" id="name" aria-describedby="emailHelp" onChange={changeState} ref={nameRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="desc" className="form-label">Descripción</label>
                        <textarea rows={20} className="form-control" id="desc" onChange={changeState} ref={descriptionRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="image" className="form-label">Imagen</label><br />
                        <input type='file' rows={20} className="form-control" id="image" onChange={(e) => uploadFile(e.target.files[0])} />
                    </div>
                    <button type="submit" className="btn btn-primary">Añadir</button>
                </form>
            </div>
        </div>
    )
}

export default BackendProjects;