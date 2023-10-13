const express = require('express');
const router = express.Router();
const participantsCtrl = require('../../controllers/api/participants');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, participantsCtrl.create);

router.get('/', participantsCtrl.index);

router.delete('/:id', ensureLoggedIn, participantsCtrl.delete);

module.exports = router;