const data = [{
  fecha: 'Anteayer',
  pregunta1: 1,
  pregunta2: 1,
  sumaTotal: 10,
  userId: 1
}, {
  fecha: 'Ayer',
  pregunta1: 1,
  pregunta2: 2,
  sumaTotal: 20,
  userId: 1
}, {
  fecha: 'Hoy',
  pregunta1: 2,
  pregunta2: 1,
  sumaTotal: 30,
  userId: 1
}, {
  fecha: 'Anteayer',
  pregunta1: 2,
  pregunta2: 2,
  sumaTotal: 40,
  userId: 1
}, {
  fecha: 'Maniana',
  pregunta1: 1,
  pregunta2: 1,
  sumaTotal: 40,
  userId: 1
}, {
  fecha: 'PasadoManiana',
  pregunta1: 2,
  pregunta2: 2,
  sumaTotal: 50,
  userId: 1
}]

exports.seed = function(knex, Promise) {
  return knex('cuestionarioAQ').del()
    .then(function() {
      return knex('cuestionarioAQ')
        .insert(data)
    });
}