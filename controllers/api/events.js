const Event = require('../../models/event');

module.exports = {
    create,
    index,
    delete:deleteEvent,
    show,
    edit,
    update
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
  
  res.json(event);
}

async function show(req,res) {
  const event = await Event.findById(req.params.id);
  res.json(event);
}

async function edit(req,res) {
  const event = await Event.findById(req.params.id);
  res.jso(event);
}

async function update(req,res) {
  const event = await Event.findById(req.params.id);
  const newEvent = await event.updateOne(req.body);
  const events = await Event.find({user: req.user._id});
  res.json(events);
}