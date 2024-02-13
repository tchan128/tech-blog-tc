const router = require('express').Router();
const { User, Blog, Comments } = require('../models'); 

// GET all events for homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['id']
                },
            ],
        });

        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        // res.json(blogs)
        res.render('homepage')
        // res.render('homepage', {
        //     blogs
        // });
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});


router.get('/login', (req, res) => {
    // if (req.session.logged_in) {
    //     res.redirect('/dashboard');
    //     return;
    // }

    res.render('login');
});


module.exports = router;