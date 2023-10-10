const express = require('express');
const router = express.Router();
const eventsCtrl = require('../../controllers/api/events');

router.post('/', eventsCtrl.create);

router.get('/', eventsCtrl.index);

router.delete('/:id', eventsCtrl.delete);

module.exports = router;