const express = require('express');
const router = express.Router();
const lectureController = require('../controllers/lectureController');

router.post('/', lectureController.createLecture);
router.get('/:id', lectureController.getLectureById);

module.exports = router;
