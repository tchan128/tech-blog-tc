const sequelize = require('../config/connection');
const seedUser = require('./userData');
const seedBlog = require('./blogData');
const seedComments = require('./commentsData');

const seedAll = async () => {
    await sequelize.sync({ force: true });

    await seedUser();

    await seedBlog();

    await seedComments();

    process.exit(0);
};

seedAll();