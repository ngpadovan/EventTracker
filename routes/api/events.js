const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

router.post('/', ensureLoggedIn, eventsCtrl.create);

router.get('/', eventsCtrl.index);

router.delete('/:id', ensureLoggedIn, eventsCtrl.delete);

router.get('/:id', eventsCtrl.show);

router.get('/:id/edit', ensureLoggedIn, eventsCtrl.edit);

router.put('/:id', ensureLoggedIn, eventsCtrl.update);

module.exports = router;