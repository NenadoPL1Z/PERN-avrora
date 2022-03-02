const Router = require('express')
const router = new Router();
const newsController = require('../controllers/newsController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/getLastNews', newsController.getPage)
router.post('/create', checkRole('ADMIN'), newsController.create)
router.post('/info', newsController.getOne)

module.exports = router;
