const router = require('express').Router();
const { User, Blog, Comments } = require('../models'); 

// GET all events for homepage
router.get('/', async (req, res) => {
    try {
        const eventsData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name']
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        res.render('homepage', {
            blogs
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

module.exports = router;