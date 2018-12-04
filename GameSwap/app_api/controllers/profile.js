const mongoose = require('mongoose');
const profiles = mongoose.model('profile');



const addprofile = function (req, res) {
    profiles.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    }, (err, profile) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(profile);
        }
    });
};





const readprofile = function (req, res) {
    if (req.params && req.params.profileid) {
        profiles
            .findById(req.params.profileid)
            .exec((err, profile) => {
                if (!profile) {
                    res
                        .status(404)
                        .json({
                            "message": "The profile in question was not found"
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
                    .json(profile);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No profile matching that discription"
            });
    }
};

module.exports= {
    addprofile,
    readprofile,
};