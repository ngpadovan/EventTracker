const express = require('express');
const router = express.Router();
const participantsCtrl = require('../../controllers/api/participants');

router.post('/', participantsCtrl.create);

router.get('/', participantsCtrl.index);

module.exports = router;