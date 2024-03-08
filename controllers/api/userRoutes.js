const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err)
    }
});

router.post('/login', async (req, res) => {
    console.log("reaching here!")
    try {
        console.log("reaching here!")
        const userData = await User.findOne({ where: { name: req.body.name } });
        console.log('User data:', userData);

        if (!userData) {
            console.log("its the name")
            res.status(400).json({ message: 'Incorrect email or password, please try again' })
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        console.log(validPassword)
        console.log(req.body.password)
        console.log(userData.password)

        if (!validPassword) {
            console.log("its the password")
            res.status(400).json({ message: 'Incorrect email or password, please try again: Password' })
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            console.log('You are now logged in!');

            res.json({ user: userData, message: 'You are now logged in!' });
        });
    } catch (err) {
        res.status(400).json(err)
        console.log("Error here in userRoutes")
    }
})

module.exports = router;