const Router = require('express').Router
const apiRouter = Router()

const TypeOfUser = require('../models/TypeOfUser');
const FormulariosDisplayControlBoard = require('../models/FormulariosDisplayControlBoard');

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

getAllTypeOfUsers = function getAllTypeOfUsers(req, res) {
  TypeOfUser
    .query()
    .then(function(data) {
      res.json(data)
    })
    .catch(function(e){
      console.log(e)
    })
  }

getPrivilegesByUserId = function getPrivilegesByUserId(req, res) {
  const id = parseInt(req.params.id)
  TypeOfUser
    .query()
    .findById(id)
    .then(function(privileges) {
      res.json(privileges).status(200)
    })
    .catch(function(e){
      console.log(e)
    })
  }

updateTypeOfUser = function updateTypeOfUser(req,res) {
  const id = parseInt(req.params.id)
  const newData = req.body

  TypeOfUser
    .query()
    .updateAndFetchById(id, newData)
    .then(function(typeOfUserUpdated) {
      res.json(typeOfUserUpdated).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })

}

registerNewSetOfPrivilegesForNewUser = function registerNewSetOfPrivilegesForNewUser(req, res) {

  TypeOfUser
    .query()
    .insert(req.body)
    .then(function(newSetOfPrivilegesForNewUser) {
      res.json(newSetOfPrivilegesForNewUser).status(200)
    })
}

// ********************************


getAllFormulariosDisplayOfUsers = function getAllFormulariosDisplayOfUsers(req, res) {
  FormulariosDisplayControlBoard
    .query()
    .then(function(data) {
      res.json(data)
    })
    .catch(function(e){
      console.log(e)
    })
  }

registerNewFormulariosDisplayForNewUser = function registerNewFormulariosDisplayForNewUser(req, res) {
  FormulariosDisplayControlBoard
    .query()
    .insert(req.body)
    .then(function(newSetOfFormulariosDisplayForNewUser) {
      res.json(newSetOfFormulariosDisplayForNewUser).status(200)
    })
}


getFormulariosDisplayByUserId = function getFormulariosDisplayByUserId(req, res) {
  const id = parseInt(req.params.id)
  FormulariosDisplayControlBoard
    .query()
    .findById(id)
    .then(function(formulariosDisplayControl) {
      res.json(formulariosDisplayControl).status(200)
    })
    .catch(function(e){
      console.log(e)
    })
  }

updateFormulariosDisplayOfUser = function updateFormulariosDisplayOfUser(req,res) {
  const id = parseInt(req.params.id)
  const newData = req.body

  FormulariosDisplayControlBoard
    .query()
    .updateAndFetchById(id, newData)
    .then(function(formulariosDisplayUpdated) {
      res.json(formulariosDisplayUpdated).status(200)
    })
    .catch(function(e) {
      res.json({
        error: e
      }).status(500)
    })

}


// *******************************


// function deleteTweet(req, res) {
//   const tweetId = parseInt(req.params.tweetId)

//   Tweet
//     .query()
//     .deleteById(tweetId)
//     .then(function(rowsDeleted) {
//       res.json({
//         tweetsDeleted: rowsDeleted
//       }).status(200)
//     })
// }

//   deleteQuote = quoteId => {
//     request
//       .delete(`${API_URL}/api/quotes/${quoteId}`)
//       .then(() => {
//         console.log('quote eliminada.')
//     })

//     request
//       .get(`${API_URL}/api/quotes`)
//       .then((data) => {
//         this.setState({
//           quotes: data.body
//         })
//       })
  
//       .catch(function(e){
//         console.log(e)
//       })
//   }


// apiRouter
//   .delete('/tweets/:tweetId', deleteTweet)


// ***********
// ******************


apiRouter
  .get('/allAnswersCuestionarioAQ', isUserAuthenticated, getAllAnswersCuestionarioAQ)
  .post('/allAnswersCuestionarioAQ', isUserAuthenticated, sendNewAnswerInAllAnswersCuestionarioAQ)

apiRouter
  .get('/registeredUsers', isUserAuthenticated, getRegisteredUsers)

apiRouter
  .get('/typeOfUser', isUserAuthenticated, getAllTypeOfUsers)
  .get('/typeOfUser/:id', isUserAuthenticated, getPrivilegesByUserId)
  .post('/typeOfUser', registerNewSetOfPrivilegesForNewUser)
  .put('/typeOfUser/:id', isUserAuthenticated, updateTypeOfUser)

apiRouter
  .get('/formulariosBoard', isUserAuthenticated, getAllFormulariosDisplayOfUsers)
  .get('/formulariosBoard/:id', isUserAuthenticated, getFormulariosDisplayByUserId)
  .post('/formulariosBoard', registerNewFormulariosDisplayForNewUser)
  .put('/formulariosBoard/:id', isUserAuthenticated, updateFormulariosDisplayOfUser)

module.exports = apiRouter
