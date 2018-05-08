const CuestionarioAQ = require('../models/CuestionarioAQ');

exports.getAllAnswersCuestionarioAQ = function getAllAnswers(req, res) {
  CuestionarioAQ
    .query()
    .then(function(data) {
      res.json(data)
    })
  }

exports.sendNewAnswerInAllAnswersCuestionarioAQ = function sendNewAnswerInAllAnswersCuestionarioAQ(req, res) {
  CuestionarioAQ
    .query()
    .insert(req.body)
    .then(function(newAnswer) {
      res.json(newAnswer).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
}