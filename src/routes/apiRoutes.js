const Router = require('express').Router
const apiRouter = Router()

const isUserAuthenticated = require('../modules/isUserAuthenticated')

const getPrivilegesByUserId = require('../modules/typeOfUserCRUDfns.js')

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

apiRouter
  .get('/allAnswersCuestionarioAQ', isUserAuthenticated, getAllAnswersCuestionarioAQ)
  .post('/allAnswersCuestionarioAQ', isUserAuthenticated, sendNewAnswerInAllAnswersCuestionarioAQ)

apiRouter
  .get('/registeredUsers', isUserAuthenticated, getRegisteredUsers)

apiRouter
  .get('/typeOfUser/:id', getPrivileges)

module.exports = apiRouter
