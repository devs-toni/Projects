let controller = {

    save: (req, res) => {
        let params = req.body;
        console.log(params);

        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('INSERT INTO comments (name, comment) VALUES (?, ?)', [params.name, params.comment], (err, commentStored) => {
                console.log(err)
                if (err || !commentStored) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No se ha podido guardar el comentario'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    commentStored
                });
            });

        });
    },

    get: (req, res) => {
        let params = req.body;

        req.getConnection((err, conn) => {
            if (err) next(err);

            conn.query('SELECT * FROM comments', (err, comments) => {
                if (err || !comments) {
                    return res.status(404).send({
                        status: 'error',
                        message: 'No hay comentarios'
                    });
                }

                return res.status(200).send({
                    status: 'success',
                    comments
                });

            });
        });
    }
}

module.exports = controller;