const Event = require('../../models/event');

module.exports = {
    create,
    index,
    delete:deleteEvent
}

async function create(req, res) {
      const event = await Event.create(req.body);
      res.json(event);
}

async function index(req,res) {
    const events = await Event.find({user: req.user._id});
    res.json(events);
  }

  async function deleteEvent(req, res) {
    const event = await Event.findOneAndDelete({
      "_id": req.params.id,
    });
  
  res.json(participant);
}