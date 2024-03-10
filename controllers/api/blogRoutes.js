const router = require('express').Router();
const { Blog } = require('../../models');
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

router.put('/:blogId', async (req, res) => {
    try {
        const blogData = await Blog.update(req.body, {
            where: {
                id: req.params.blogId
            }
        });
        if (!blogData[0]) {
            res.status(400).json({ message: 'No user with this id!' });
            return;
        }
        res.status(200).json(blogData)
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;