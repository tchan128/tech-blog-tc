const { User } = require('../models');

const userData = [
    {
        name: 'Xandromus',
        // email: 'xandromus123@hotmail.com',
        password: 'password123'
    },
    {
        name: 'Lernantino',
        // email: 'lernantino234@yahoo.com',
        password: 'password234'
    }
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;