import React, { useEffect } from 'react';
import { useState } from 'react';
import Global from '../../Global';
import axios from 'axios';
import Arrow from '../Arrow';

const BackendProjects = () => {

    const backendUrl = Global.url;

    const [project, setProject] = useState({
        name: null,
        description: null,
        position: null,
        link: null
    });
    const [files, setFiles] = useState(null);
    const [projects, setProjects] = useState([]);

    // Referencia de los datos del formulario
    let nameRef = React.createRef();
    let descriptionRef = React.createRef();
    let positionRef = React.createRef();
    let linkRef = React.createRef();

    const changeState = () => {
        setProject({
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            position: positionRef.current.value,
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
        file.append('name', project.name);
        file.append('description', project.description);
        file.append('position', project.position);
        file.append('link', project.link);

        await axios.post(backendUrl + 'saveProject', file);
        getAllProjects();
    }

    useEffect(() => {
        getAllProjects();
    }, []);

    const handleRemove = async (e) => {
        await axios.delete(`${backendUrl}deleteProject/${e.target.id}`);
        getAllProjects();
    }

    const getAllProjects = async () => {
        await axios.get(`${backendUrl}getProjects`).then(res => {
            setProjects(res.data.projects);
        });
    }

    return (
        <div className="main">
            <Arrow direction='left' previous='/admin' />
            <h1 className='text-center mb-4'>AÑADIR PROYECTO</h1>
            <div className='container mb-5 '>
                <div className="row-cols-1 text-center mt-5 mb-3 d-flex flex-column justify-content-center">
                    <form onSubmit={sendData}>
                        <div className="mb-3">
                            <label htmlFor="position" className="form-label">Position</label>
                            <input type="text" className="form-control" id="position" onChange={changeState} ref={positionRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Nombre</label>
                            <input type="text" className="form-control" id="name" onChange={changeState} ref={nameRef} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="link" className="form-label">Link</label>
                            <input type="text" className="form-control" id="link" onChange={changeState} ref={linkRef} />
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
            <h1 className='text-center mb-5'>VER PROYECTOS</h1>
            <div className='container mb-5 '>
                <table className="table table-bordered table-light">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Description</th>
                            <th scope="col">Link</th>
                            <th scope="col">Image</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            projects.map((project, index) => {
                                let style = {
                                    cursor: 'pointer'
                                }
                                return (
                                    <tr key={index}>
                                        <th scope="row">{project.id}</th>
                                        <td>{project.name}</td>
                                        <td>{project.description}</td>
                                        <td>{project.link}</td>
                                        <td>{project.image}</td>
                                        <td><svg onClick={handleRemove} id={project.id} xmlns="http://www.w3.org/2000/svg" width="26" style={style} height="26" fill="currentColor" className="bi bi-trash3" viewBox="0 0 16 16">
                                            <path onClick={handleRemove} id={project.id} d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
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

export default BackendProjects;