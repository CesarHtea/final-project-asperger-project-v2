const { Model } = require('objection')

class TypeOfUser extends Model {
  static get tableName() {
    return 'typeOfUser'
  }
}

module.exports = TypeOfUser;