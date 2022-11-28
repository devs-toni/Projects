'use strict';

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
    }
}

module.exports = controller;