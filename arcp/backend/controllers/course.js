'use strict';

let Course = require('../models/course');

let controller = {

    save: (req, res) => {
        let params = req.body;

        let course = new Course();
        course.name = params.name;
        course.center = params.center;
        course.hours = params.hours;
        course.link = params.link;
        course.hidden = params.hidden;

        if (req.file) {
            const { originalname } = req.file;
            originalname.split('.');
            course.setImage(originalname[0]);
        }

        course.save((err, courseStored) => {
            if (err || !courseStored) return res.status(404).send({
                status: 'error',
                message: 'El curso no se ha guardado'
            });

            return res.status(200).send({
                status: 'success',
                courseStored
            });
        })

    },

    
    getCourses: (req, res) => {
        let query = Course.find({});
        query.sort('-date').exec((err, courses) => {

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
    },

    delete: (req, res) => {
        let courseId = req.params.id;

        Course.findOneAndDelete({ _id: courseId }, (err, courseRemoved) => {
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
    }
}

module.exports = controller;