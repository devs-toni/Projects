const path = 'public/'

let controller = {

    save: (req, res) => {
        var params = req.body;

        req.getConnection((err, conn) => {
            conn.query('INSERT INTO projects (name, description, position, link, image) VALUES (?, ?, ?, ?, ?)',
                [
                    params.name,
                    params.description,
                    params.position,
                    params.link,
                    `${path}${req.file.filename}`
                ], 
                (err, projectStored) => {
                    if (err || !projectStored) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'El proyecto no se ha guardado'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        projectStored
                    });
                });
        });
    },

    get: (req, res) => {
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM projects', (err, projects) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!projects) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay proyectos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    projects
                })

            });
        }
        );
    },

    delete: (req, res) => {
        let projectId = req.params.id;

        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query(`DELETE FROM projects WHERE id=${projectId}`, (err, projectRemoved) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al eliminar el proyecto'
                    });
                }

                if (!projectRemoved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha encontrado el proyecto a eliminar'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    projectRemoved
                });
            });
        });
    }
}

module.exports = controller;