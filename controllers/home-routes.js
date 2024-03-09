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
            blogs,
            logged_in: req.session.logged_in 
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

router.get('/dashboard', async (req, res) => {
    try { 
        if (req.session.logged_in) {

            const userData = await User.findByPk(req.session.user_id, {
                attributes: { exclude: ['password'] },
                include: [{ model: Blog }] 
            });
    
            const user = userData.get({ plain: true });

            res.render('dashboard', {
                ...user,
                logged_in: req.session.logged_in,
            });
            return;
        } else {
            res.redirect('login');
        }
    } catch (err) {
        res.status(400).json(err)
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