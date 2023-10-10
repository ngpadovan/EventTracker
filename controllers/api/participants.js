const Participant = require('../../models/participant');

module.exports = {
    create,
    index,
    delete: deleteParticipant
}

async function create(req,res) {
    const participant = await Participant.create(req.body);
    res.json(participant);
  }

async function index(req,res) {
  const participants = await Participant.find({user: req.user._id});
  res.json(participants);
}

async function deleteParticipant(req, res) {
  const participant = await Participant.findOneAndDelete({
    "_id": req.params.id,
  });
  
  res.json(participant);
}