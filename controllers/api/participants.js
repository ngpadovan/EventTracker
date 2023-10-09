const Participant = require('../../models/participant');

module.exports = {
    create,
    index
}

async function create(req,res) {
    const participant = await Participant.create(req.body);
    res.json(participant);
  }

  async function index(req,res) {
    const participants = await Participant.find({user: req.user._id});
    res.json(participants);
  }