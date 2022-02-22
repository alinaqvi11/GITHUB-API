const router = require('express').Router();
const gitHubController = require('../controllers/gitHubController')

router.get('/commit',gitHubController.getGitHubData);

module.exports = router;