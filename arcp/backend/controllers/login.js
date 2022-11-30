const token = { token: 'auth' }

let login = {
    login: (req, res) => {
        let params = req.body;
        req.getConnection((err, conn) => {
            conn.query('SELECT * FROM users WHERE username=?', params.username , (err, row) => {
                if (err || !row) {
                    return res.status(200).send({
                        status: 'Error login',
                    });
                } 
                if (row[0] && row[0].password === params.password) {
                    return res.status(200).send({
                        status:'Login Success',
                        token
                    });
                } else return res.status(200).send({ status: 'Error login' });
            });
        });
    }
};

module.exports = login;