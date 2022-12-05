let controller = {

    save: (req, res) => {
        let params = req.body;

        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('INSERT INTO about (topic, text) VALUES (?, ?)', [params.topic, params.text], (err, topicStored) => {
                if (err || !topicStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha podido guardar el topic'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    topicStored
                });
            });

        });
    },

    getAboutMe: (req, res) => {
        let params = req.body;
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM about WHERE topic=?', params.topic, (err, topic) => {
                if (err || !topic) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe el topic'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    topic
                });

            });
        });
    },
    getAllAbout: (req, res) => {
        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM about', (err, allAbout) => {
                if (err || !allAbout) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay datos'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    allAbout
                });

            });
        });
    },

    delete: (req, res) => {
        let aboutId = req.params.id;
        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query(`DELETE FROM about WHERE id=${aboutId}`, (err, aboutRemoved) => {
                if (err) {
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al eliminar la entrada'
                    });
                }

                if (!aboutRemoved) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha encontrado la entrada a eliminar'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    aboutRemoved
                });
            });
        });
    }
}

module.exports = controller;