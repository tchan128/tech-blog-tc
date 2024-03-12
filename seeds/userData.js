const { User } = require('../models');

const userData = [
    {
        name: 'Xandromus',
        password: 'password123'
    },
    {
        name: 'Lernantino',
        password: 'password234'
    }
];

const seedUser = () => User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;