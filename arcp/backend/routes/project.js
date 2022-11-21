'use strict'

let express = require('express');
let Project = require('../controllers/project');

let router = express.Router();

router.post('/saveProject', Project.save);
router.get('/projects', Project.getProjects);
router.post('/deleteProject/:id', Project.delete);

module.exports = router;
