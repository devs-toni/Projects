'use strict'

let express = require('express');

let Project = require('../controllers/project');
let Curriculum = require('../controllers/curriculum');
let Course = require('../controllers/course');

const upload = require('../libs/storage');

let router = express.Router();

router.post('/saveProject', upload.single('file'), Project.save);
router.get('/getProjects', Project.getProjects);
router.delete('/deleteProject/:id', Project.delete);

router.post('/saveCv', Curriculum.save);
router.get('/getCvs', Curriculum.getCvs);
router.delete('/deleteCv/:id', Curriculum.delete);

router.post('/saveCourse', upload.single('file'), Course.save);
router.get('/getCourses', Course.getCourses);
router.delete('/deleteCourse/:id', Course.delete);

module.exports = router;
