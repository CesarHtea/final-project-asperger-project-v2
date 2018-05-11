
exports.up = function(knex, Promise) {
  return knex
    .schema
    .alterTable('datosPersonales', function(t) {
      t.date('fechaNacimiento');
      t.text('domicilio');
      t.decimal('telefonoFijo');
      t.decimal('telefonoMovil');
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .table('datosPersonales', function(t) {
      t.dropColumns('fechaNacimiento');
      t.dropColumns('domicilio');
      t.dropColumns('telefonoFijo');
      t.dropColumns('telefonoMovil');
    })
};

