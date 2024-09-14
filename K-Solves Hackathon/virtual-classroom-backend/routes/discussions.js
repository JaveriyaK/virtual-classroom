const express = require('express');
const router = express.Router();
const discussionController = require('../controllers/discussionController');

router.post('/', discussionController.createDiscussion);
router.get('/:lectureId', discussionController.getDiscussionsByLecture);

module.exports = router;
