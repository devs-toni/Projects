'use strict'

let controller = {

    save: (req, res) => {
        var params = req.body;

        req.getConnection((err, conn) => {
            if (err) next(err);
            conn.query('INSERT INTO curriculum (name, center, date, description, topic) VALUES (?,?,?,?,?)',
                [
                    params.name,
                    params.center,
                    params.date,
                    params.topic,
                    params.description
                ],
                (err, cvStored) => {
                    console.log(cvStored);
                    if (err || !cvStored) {
                        console.log('Error');
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