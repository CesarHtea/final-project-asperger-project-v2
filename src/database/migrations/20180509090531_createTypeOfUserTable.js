
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('typeOfUser', function(t) {
      t.increments();
      t.bool('admin');
      t.bool('psicologo');
      t.bool('px')
    })  
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('typeOfUser')
};