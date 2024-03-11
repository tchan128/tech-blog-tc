const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');
// const withAuth = require('../../utils/auth');

router.post('/', async (req, res) => {
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get('/', async (req, res) => {
    try {
        const newBlog = await Blog.findAll();

        res.status(200).json(newBlog)
    } catch (err) {
        res.status(400).json(err)
    }
});

router.get('/:blogId', async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.blogId, {
            include: [
                {
                    model: User,
                    attribute: ['name'],
                },
                {
                    model: Comments,
                    as: 'blog_comments',
                    attributes: ['comment', 'date_created', 'user_id']
                }
            ]
        });

        const blog = blogData.get({ plain: true });

        res.render('edit-blog', {
            blog,
            logged_in: req.session.logged_in 
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:blogId', async (req, res) => {
    console.log("reaching")
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.blogId
            }
        });
        if (!blogData[0]) {
            res.status(400).json({ message: 'No blog with this id!' });
            return;
        }
        res.status(200).json(blogData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

router.delete('/:blogId', async (req, res) => {
    try {
        const blogData = await Blog.destroy({
            where: {
                id: req.params.blogId
            }
        });
        if (!blogData) {
            res.status(400).json({ message: 'No blog with this id!' });
            return;
        }
        res.status(200).json(blogData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
})

module.exports = router;