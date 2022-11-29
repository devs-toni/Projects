'use strict'

let express = require('express');

let Project = require('../controllers/project');
let Curriculum = require('../controllers/curriculum');
let Skill = require('../controllers/skill');
let Course = require('../controllers/course');
let Login = require('../controllers/login');
let About = require('../controllers/about');

const upload = require('../libs/storage');

let router = express.Router();

router.post('/saveProject', upload.single('file'), Project.save);
router.get('/getProjects', Project.get);
router.delete('/deleteProject/:id', Project.delete);

router.post('/saveCv', Curriculum.save);
router.post('/getCurriculum', Curriculum.get);
router.delete('/deleteCv/:id', Curriculum.delete);

router.get('/getSkills', Skill.get);

router.post('/saveCourse', upload.single('file'), Course.save);
router.get('/getCourses', Course.get);
router.delete('/deleteCourse/:id', Course.delete);

router.post('/saveAboutMe', About.save);
router.post('/getAboutMe', About.getAboutMe)

router.post('/login', Login.login);

module.exports = router;
