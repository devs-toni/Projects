'use strict'

let Project = require('../models/project');

let controller = {

    save: (req, res) => {
        var params = req.body;

        var project = new Project();
        project.title = params.name;
        project.content = params.date;
        project.author = params.center;
        project.description = params.description;

        project.save((err, projectStored) => {

            if (err || !projectStored) return res.status(404).send({
                status: 'error',
                message: 'El proyecto no se ha guardado'
            });

            return res.status(200).send({
                status: 'success',
                projectStored
            });
        });
    },

    getProjects: (req, res) => {
        let query = Project.find({});
        query.sort('-date').exec((err, projects) => {

            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al extraer los datos'
                });
            }

            if (!projects) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No hay proyectos para mostrar'
                });
            }

            return res.status(200).send({
                status: 'success',
                articles
            })
        });
    },

    delete: (req, res) => {
        let projectId = req.params.id;

        Project.findOneAndDelete({ _id: projectId }, (err, projectRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: 'error',
                    message: 'Error al eliminar el proyecto'
                });
            }

            if (!articleRemoved) {
                return res.status(404).send({
                    status: 'error',
                    message: 'No se ha encontrado el proyecto a eliminar'
                });
            }

            return res.status(200).send({
                status: 'success',
                projectRemoved
            });
        });
    }
}

module.exports = controller;