const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

// For testing purposes
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll();

        res.json(userData)
    } catch (err) {
        res.status(400).json(err)
    }
});


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

        console.log(validPassword) // returns false
        console.log(req.body.password == userData.password) // returns true
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
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    } else {
      res.status(404).end();
    }
  });

module.exports = router;