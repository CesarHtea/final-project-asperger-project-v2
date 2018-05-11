
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('datosPersonales', function(t) {
    	t.increments();
    	t.timestamp('createdAt')
          .notNullable()
          .defaultTo(knex.fn.now());
    	t.string('nombre');
    	t.string('apellido');
    	t.string('sexo');
    	t.decimal('edad')
        t.date('fechaNacimiento');
        t.text('domicilio');
        t.decimal('telefonoFijo');
        t.decimal('telefonoMovil');
    }); 
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('datosPersonales')
  
};
