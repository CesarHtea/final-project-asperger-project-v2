const Router = require('express').Router
const apiRouter = Router()

const TypeOfUser = require('../models/TypeOfUser');

const isUserAuthenticated = require('../modules/isUserAuthenticated')

const {
  getAllAnswersCuestionarioAQ,
  sendNewAnswerInAllAnswersCuestionarioAQ
} = require('../modules/cuestionarioAQTableCRUDfns')

const {
  getRegisteredUsers
//   ,
//   getTalentos,
//   getUnGrupoDeTalentosPorId,
//   createNewGrupoDeTalentos,
//   updateUnGrupoDeTalentos,
//   deleteUnGrupoDeTalentos
} = require('../modules/talentosTableCRUDfns')

// apiRouter
//   .get('/talentos', getTalentos)
//   .get('/talentos/:id', getUnGrupoDeTalentosPorId)
//   .post('/talentos', isUserAuthenticated, createNewGrupoDeTalentos)
//   .put('/talentos/:id', isUserAuthenticated, updateUnGrupoDeTalentos)
//   .delete('/talentos/:id', isUserAuthenticated, deleteUnGrupoDeTalentos)

getPrivilegesByUserId = function getPrivilegesByUserId(req, res) {
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

apiRouter
  .get('/allAnswersCuestionarioAQ', isUserAuthenticated, getAllAnswersCuestionarioAQ)
  .post('/allAnswersCuestionarioAQ', isUserAuthenticated, sendNewAnswerInAllAnswersCuestionarioAQ)

apiRouter
  .get('/registeredUsers', isUserAuthenticated, getRegisteredUsers)

apiRouter
  .get('/typeOfUser/:id', getPrivilegesByUserId)

module.exports = apiRouter
