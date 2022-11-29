'use strict';

let controller = {

    get: (req, res) => {

        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM skills', (err, skills) => {
                if (err || !skills) return res.status(404).send({
                    status: 'error',
                    message: 'No se han encontrado skills'
                });

                return res.status(200).send({
                    status: 'success',
                    skills
                });
            });
        });
    }
}

module.exports = controller;