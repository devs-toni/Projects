'use strict';

let controller = {

    save: (req, res) => {
        var params = req.body;
        let originalname;
        if (req.file) {
            originalname = req.file.originalname;
            originalname = originalname.split('.');
        }
    
        req.getConnection((err, conn) => {
            conn.query('INSERT INTO courses (name, center, hours, link, hidden, image) VALUES (?, ?, ?, ?, ?, ?)',
                [
                    params.name,
                    params.center,
                    params.hours,
                    params.link,
                    params.hidden,
                    originalname[0]
                ], 
                (err, courseStored) => {
                    if (err || !courseStored) {
                        return res.status(404).send({
                            status: 'error',
                            message: 'El curso no se ha guardado'
                        });
                    }

                    return res.status(200).send({
                        status: 'success',
                        courseStored
                    });
                });
        });
    },

    
    get: (req, res) => {
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM courses', (err, courses) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!courses) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay cursos para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    courses
                })

            });
        }
        );
    },


    delete: (req, res) => {
        let courseId = req.params.id;

        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query(`DELETE FROM courses WHERE id=${courseId}`, (err, courseRemoved) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al eliminar el curso'
                    });
                }

                if (!courseRemoved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha encontrado el curso a eliminar'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    courseRemoved
                });
            });
        });
    }
}

module.exports = controller;