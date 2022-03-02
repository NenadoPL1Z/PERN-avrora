const Router = require('express')
const router = new Router();
const useController = require('../controllers/userController')
const authMiddleware = require('../middleware/authModdleware')


router.post('/registration', useController.registration)
router.post('/login', useController.login)
router.post('/reset', useController.reset)
router.get('/auth', authMiddleware, useController.auth)

module.exports = router;
