const router = require('express').Router();

const handler = require('../handlers');

router.get('/', handler.home);

module.exports = router;
