const router = require('express').Router();
const { User, Blog, Comments } = require('../models'); 

// GET all events for homepage
router.get('/', async (req, res) => {
    try {
        const blogData = await Blog.findAll({
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
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err)
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attribute: ['name'],
                },
                {
                    model: Comments,
                    attribute: ['comment', 'date_created', 'user_id']
                }
            ]
        });

        const blog = blogData.get({ plain: true });

        res.render('blog', {
            ...blog,
            logged_in: req.session.logged_in
        })

        // res.json(blog)

    } catch (err) {
        res.status(500).json(err)
        console.log(err)
    }
})

router.get('/dashboard', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    } else {
        res.render('login');
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('login');
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
    }
    res.render('signup');
});


module.exports = router;