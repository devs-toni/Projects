const path = 'public/'

let controller = {

    save: (req, res) => {
        let params = req.body;
        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query('INSERT INTO curriculum (name, center, date, description, topic, image) VALUES (?,?,?,?,?,?)',
                [
                    params.name,
                    params.center,
                    params.date,
                    params.topic,
                    params.description,
                    `${path}${req.file.filename}`
                ],
                (err, cvStored) => {
                    if (err || !cvStored) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'El registro no se ha guardado'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        cvStored
                    });
                });
        });
    },

    get: (req, res) => {
        let params = req.body;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM curriculum WHERE topic=?', params.topic, (err, cv) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!cv) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay datos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    cv
                })

            });
        }
        );
    },

    getCurriculumTechById: (req, res) => {
        let id = req.params.id;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM curriculumtech WHERE curriculumId=?', id, (err, tech) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!tech) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay datos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    tech
                })

            });
        }
        );
    },

    getCurriculumDescriptionById:(req, res) => {
        let id = req.params.id;
        let lang = req.params.lang;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM curriculumparagraphs WHERE curriculumId=? and lang=?',[id, lang], (err, description) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!description) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay datos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    description
                })

            });
        }
        );
    },


    getAllCvs: (req,res) => {
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM curriculum', (err, cvs) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!cvs) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay datos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    cvs
                })

            });
        }
        );
    },


    delete: (req, res) => {
        let cvId = req.params.id;

        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query(`DELETE FROM curriculum WHERE id=${cvId}`, (err, cvRemoved) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al eliminar el registro'
                    });
                }

                if (!cvRemoved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha encontrado el registro a eliminar'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    cvRemoved
                });
            });
        });
    }
}

module.exports = controller;