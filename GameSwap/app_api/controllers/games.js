const mongoose = require('mongoose');
const games = mongoose.model('game');



const addgame = function (req, res) {
    games.create({
        gamename: req.body.game,
        discription: req.body.discription,
        rating: req.body.rating,
    }, (err, game) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(game);
        }
    });
};





const readgame = function (req, res) {
    if (req.params && req.params.gameid) {
        games
            .findById(req.params.gameid)
            .exec((err, game) => {
                if (!game) {
                    res
                        .status(404)
                        .json({
                            "message": "The game in question was not found"
                        });
                    return;
                } else if (err) {
                    res
                        .status(404)
                        .json(err);
                    return;
                }
                res
                    .status(200)
                    .json(game);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No game matching that discription"
            });
    }
};

module.exports= {
    addgame,
    readgame,
};