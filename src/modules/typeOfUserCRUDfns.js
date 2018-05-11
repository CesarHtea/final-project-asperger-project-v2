const TypeOfUser = require('../models/TypeOfUser');

exports.getPrivilegesByUserId = function getPrivilegesByUserId(req, res) {
  const id = parseInt(req.params.id)
  TypeOfUser
    .query()
    .findById(id)
    .then(function(privileges) {
      res.json(privileges).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })
  }