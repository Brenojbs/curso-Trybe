const { Router } = require('express');
const { create, getAll, getByEmail } = require('../controllers/user');
const { authMiddleware } = require('../middlewares');

const router = Router();

router.post('/user', create);

router.get('/user', authMiddleware, getAll);

router.get('/user/:email', getByEmail);

module.exports = router;