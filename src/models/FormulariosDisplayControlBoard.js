const { Model } = require('objection')

class FormulariosDisplayControlBoard extends Model {
  static get tableName() {
    return 'formulariosDisplayControlBoard'
  }
}

module.exports = FormulariosDisplayControlBoard