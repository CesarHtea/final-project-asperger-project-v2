const data = [
  { userId: 1, admin: true,  psicologo: true,  px: true  },
  { userId: 2, admin: false, psicologo: true,  px: false },
  { userId: 3, admin: false, psicologo: false, px: true  },
  { userId: 4, admin: false, psicologo: false, px: true  },
  { userId: 5, admin: false, psicologo: false, px: true  },
  { userId: 6, admin: false, psicologo: false, px: true  },
  { userId: 7, admin: false, psicologo: false, px: true  },
  { userId: 8, admin: false, psicologo: false, px: true  }
  ]

exports.seed = function(knex, Promise) {
  return knex('typeOfUser').del()
    .then(function() {
      return knex('typeOfUser')
        .insert(data)
    });
}