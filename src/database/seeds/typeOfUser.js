const data = [{
  superAdmin: false
  admin: false
  psicologo: false
}]

exports.seed = function(knex, Promise) {
  return knex('typeOfUser').del()
    .then(function() {
      return knex('typeOfUser')
        .insert(data)
    });
}