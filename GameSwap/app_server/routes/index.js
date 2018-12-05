var express = require('express');
var router = express.Router();

const ctrlHomePage = require('../controllers/homepage');
const ctrlLogin = require('../controllers/login');
const ctrlProfile = require('../controllers/profile');
const ctrlRegister = require('../controllers/register');



router.get('/', ctrlHomePage.homepage);


router.get('/Login', ctrlLogin.login);

router.get('/Register',ctrlRegister.register);

router.get('/Profile', ctrlProfile.game);

module.exports = router;