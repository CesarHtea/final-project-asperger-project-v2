
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('formulariosDisplayControlBoard', function(t) {
      t.increments();
      t.bool('aqCoeficienteDelEspectro');
      t.bool('eqCoeficienteDeEmpatia');
      t.bool('srsEscalaDeSensibilidadSocial');
      t.bool('sqCoeficienteDeSistematizacion');
      t.bool('pdq4CuestionarioDePersonalidad');
      t.bool('historiaDelDesarrollo');
      t.bool('historiaDelDesarrolloVersionPadres');
      t.bool('inventarioDeAnsiedadDeBeck');
      t.bool('inventarioDeDepresionDeBeck');
    })
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('formulariosDisplayControlBoard')
};