const { Model } = require('objection')

class RegisteredUsers extends Model {
  static get tableName() {
    return 'user'
  }

  static get relationMappings() {
  	const TypeOfUser = require('./TypeOfUser')

  	return {
  	  typeOfUser: {
  	  	relation: Model.HasManyRelation,
  	  	modelClass: TypeOfUser,
  	  	join: {
          from: 'user.id',
          to: 'typeOfUser.userId'
  	  	}
  	  }
  	}
  }
}

module.exports = RegisteredUsers;