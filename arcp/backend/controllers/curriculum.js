'use strict'

let Curriculum = require('../models/curriculum');

let controller = {

    save: (req, res) => {
        var params = req.body;
        var cv = new Curriculum();

        cv.name = params.name;
        cv.center = params.center;
        cv.date = params.date;
        cv.topic = params.topic;

        cv.save((err, cvStored) => {

            if (err || !cvStored) return res.status(404).send({
                status: 'error',
                message: 'El proyecto no se ha guardado'
            });

            return res.status(200).send({
                status: 'success',
                cvStored
            });
        });
    },

    getCvs: (req, res) => {
        let query = Curriculum.find({});
        query.sort('-date').exec((err, cvs) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer los datos'
                });
            }

            if (!cvs) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay proyectos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                cvs
            })
        });
    },

    delete: (req, res) => {
        let cvId = req.params.id;

        Curriculum.findOneAndDelete({ _id: cvId }, (err, cvRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al eliminar el proyecto'
                });
            }

            if (!cvRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado el proyecto a eliminar'
                });
            }

            return res.status(200).send({
                status: 'success',
                cvRemoved
            });
        });
    }
}

module.exports = controller;