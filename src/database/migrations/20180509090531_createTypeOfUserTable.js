
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('typeOfUser', function(t) {
      t.increments();
      t.bool('admin').notNullable();
      t.bool('psicologo').notNullable();
      t.bool('px').notNullable()
    })  
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('typeOfUser')
};