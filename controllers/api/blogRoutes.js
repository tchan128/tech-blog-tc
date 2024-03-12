const router = require('express').Router();
const { Blog, User, Comments } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
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

router.get('/:blogId', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.blogId, {
            include: [
                {
                    model: User,
                    attributes: ['name'],
                },
            ]
        });

        const commentData = await Comments.findAll({
            where: {
                blog_id: req.params.blogId
            }, 
            include: {
                model: User,
                attributes: ['name']
            }
        });

        const blog = blogData.get({ plain: true });
        const comments = commentData.map(comment => comment.get({ plain: true }))

        res.render('edit-blog', {
            blog,
            comments,
            logged_in: req.session.logged_in 
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

router.put('/:blogId', withAuth, async (req, res) => {
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

router.delete('/:blogId', withAuth, async (req, res) => {
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

router.post('/:blogId', withAuth, async (req, res) => {
    try {
        const newComment = await Comments.create({
            ...req.body,
            user_id: req.session.user_id,
            blog_id: req.params.blogId
        });

        res.status(200).json(newComment)
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
})

module.exports = router;
