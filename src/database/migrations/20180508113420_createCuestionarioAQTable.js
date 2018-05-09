
exports.up = function(knex, Promise) {
  return knex
    .schema
    .createTable('cuestionarioAQ', function(t) {
      t.increments();
      t.timestamp('createdAt')
        .notNullable()
        .defaultTo(knex.fn.now());
      t.string('fecha');
      t.decimal('pregunta1');
      t.decimal('pregunta2');
      t.decimal('pregunta3');
      t.decimal('pregunta4');
      t.decimal('pregunta5');
      t.decimal('pregunta6');
      t.decimal('pregunta7');
      t.decimal('pregunta8');
      t.decimal('pregunta9');
      t.decimal('pregunta10');
      t.decimal('pregunta11');
      t.decimal('pregunta12');
      t.decimal('pregunta13');
      t.decimal('pregunta14');
      t.decimal('pregunta15');
      t.decimal('pregunta16');
      t.decimal('pregunta17');
      t.decimal('pregunta18');
      t.decimal('pregunta19');
      t.decimal('pregunta20');
      t.decimal('pregunta21');
      t.decimal('pregunta22');
      t.decimal('pregunta23');
      t.decimal('pregunta24');
      t.decimal('pregunta25');
      t.decimal('pregunta26');
      t.decimal('pregunta27');
      t.decimal('pregunta28');
      t.decimal('pregunta29');
      t.decimal('pregunta30');
      t.decimal('pregunta31');
      t.decimal('pregunta32');
      t.decimal('pregunta33');
      t.decimal('pregunta34');
      t.decimal('pregunta35');
      t.decimal('pregunta36');
      t.decimal('pregunta37');
      t.decimal('pregunta38');
      t.decimal('pregunta39');
      t.decimal('pregunta40');
      t.decimal('pregunta41');
      t.decimal('pregunta42');
      t.decimal('pregunta43');
      t.decimal('pregunta44');
      t.decimal('pregunta45');
      t.decimal('pregunta46');
      t.decimal('pregunta47');
      t.decimal('pregunta48');
      t.decimal('pregunta49');
      t.decimal('pregunta50');
      t.decimal('sumaTotal');
      t.text('interpretacionAQ')
    });
};

exports.down = function(knex, Promise) {
  return knex
    .schema
    .dropTableIfExists('cuestionarioAQ')    
};