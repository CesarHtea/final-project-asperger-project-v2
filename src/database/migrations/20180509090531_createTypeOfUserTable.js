
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('typeOfUser', function(t) {
      t.increments();
      t.bool('superAdmin');
      t.bool('admin');
      t.bool('psicologo')
    })  
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('typeOfUser')
};