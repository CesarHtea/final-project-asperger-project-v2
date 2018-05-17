
exports.up = function(knex, Promise) {
  return knex
    .schema
    .table('formulariosDisplayControlBoard', function(t) {
      t
        .integer('userId')
        .unsigned()
        .references('id')
        .inTable('user')	
    })  
};

exports.down = function(knex, Promise) {
  return  knex
    .schema
    .table('formulariosDisplayControlBoard', function(t) {
       t
         .dropForeign('userId')
         .dropColumns('userId')
    })
};