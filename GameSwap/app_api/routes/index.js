const express = require('express');
const router = express.Router();
const ctrlHomePage = require('../controllers/homepage');
const ctrlProfile = require('../controllers/profile');
const ctrlGame = require('../controllers/games');



//homepage routers
router
    .route('/homepage')
    .get(ctrlHomePage.addhomepage)
    .post(ctrlHomePage.addhomepage);
router
    .route('/homepage/:homepageid')
    .get(ctrlHomePage.readhomepage);
//Profile routers
router
    .route('/profile')
    .get(ctrlProfile.addprofile)
    .post(ctrlProfile.addprofile);
router
    .route('/profile/:profileid')
    .get(ctrlProfile.readprofile);

//Game routers

router
    .route('/games')
    .get(ctrlGame.addgame)
    .post(ctrlGame.addgame);
router
    .route('/games/:gameid')
    .get(ctrlGame.readgame);

module.exports = router;