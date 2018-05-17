const { Model } = require('objection')

class RegisteredUsers extends Model {
  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
  	const TypeOfUser = require('./TypeOfUser')
    const FormulariosDisplayControlBoard = require('./FormulariosDisplayControlBoard')

  	return {

  	  typeOfUser: {
  	  	relation: Model.HasManyRelation,
  	  	modelClass: TypeOfUser,
  	  	join: {
          from: 'user.id',
          to: 'typeOfUser.userId'
  	  	}

  	  },


      score: {
        relation: Model.HasManyRelation,
        modelClass: FormulariosDisplayControlBoard,
        join: {
          from: 'user.id',
          to: 'formulariosDisplayControlBoard.userId'
        }
      }


    } // llave del return
  } // llave del relation mapping
} // llave del model


module.exports = RegisteredUsers;