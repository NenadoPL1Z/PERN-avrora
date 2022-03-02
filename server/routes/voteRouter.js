const Router = require('express')
const router = new Router();
const voteController = require('../controllers/voteController')

router.post('/check_vote', voteController.checkVote)
router.post('/send_vote', voteController.sendVote)

module.exports = router;
