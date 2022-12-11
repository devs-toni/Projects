const path = 'public/'

let controller = {

    save: (req, res) => {
        var params = req.body;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('INSERT INTO courses (name, center, hours, link, position, ref, description, technologies, color, border, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
                [
                    params.name,
                    params.center,
                    params.hours,
                    params.link,
                    params.position,
                    params.ref,
                    params.description,
                    params.technologies,
                    params.color,
                    params.border,
                    `${path}${req.file.filename}`
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
    getCourseById: (req, res) => {
        let idCourse = req.params.id;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM courses WHERE id=?', [idCourse], (err, course) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!course) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay curso para mostrar'
                    });
                }
                return res.status(200).send({
                    status: 'success',
                    course
                })

            });
        }
        );
    },
    getCourseTechById: (req, res) => {
        let idCourse = req.params.id;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM coursestech WHERE id=?', [idCourse], (err, tech) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!tech) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay curso para mostrar'
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

    getCourseDescriptionById: (req, res) => {
        let idCourse = req.params.id;
        let lang = req.params.lang;
        console.log(lang, idCourse);
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM coursesparagraphs WHERE courseId=? and lang=?', [idCourse, lang], (err, description) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al extraer los datos'
                    });
                }
                if (!description) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay curso para mostrar'
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