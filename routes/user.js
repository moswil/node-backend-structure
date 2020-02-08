const router = require('express').Router();

const handler = require('../handlers');

router.post('/create-user', handler.register);
router.post('/auth-user', handler.login);

module.exports = router;
