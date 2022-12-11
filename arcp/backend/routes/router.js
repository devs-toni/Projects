let express = require('express');

let Project = require('../controllers/project');
let Curriculum = require('../controllers/curriculum');
let Skill = require('../controllers/skill');
let Course = require('../controllers/course');
let Login = require('../controllers/login');
let Comment = require('../controllers/comment');

const upload = require('../libs/storage');

let router = express.Router();

router.post('/saveProject', upload.single('file'), Project.save);
router.get('/getProjects', Project.get);
router.delete('/deleteProject/:id', Project.delete);

router.post('/saveCurriculum', Curriculum.save);
router.post('/getCurriculum', Curriculum.get);
router.get('/getCurriculumTech/:id', Curriculum.getCurriculumTechById);
router.get('/getCurriculumDescription/:id/:lang', Curriculum.getCurriculumDescriptionById);
router.get('/getCvs', Curriculum.getAllCvs);
router.delete('/deleteCurriculum/:id', Curriculum.delete);

router.get('/getSkills', Skill.get);

router.post('/saveCourse', upload.single('file'), Course.save);
router.get('/getCourses', Course.get);
router.get('/getCourse/:id', Course.getCourseById);
router.get('/getCourseTech/:id', Course.getCourseTechById);
router.get('/getCourseDescription/:id/:lang', Course.getCourseDescriptionById);
router.delete('/deleteCourse/:id', Course.delete);

router.post('/saveComment', Comment.save)
router.get('/getComments', Comment.get);

router.post('/login', Login.login);

module.exports = router;
