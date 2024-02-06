const { Comments } = require('../models');

const commentData = [
    {
        comment: 'I just learned about this in my class!',
        date_created: '1/8/2024',
        user_id: '2',
        blog_id: '1'
    }
];

const seedComments = () => Gallery.bulkCreate(commentData);

module.exports = seedComments;
