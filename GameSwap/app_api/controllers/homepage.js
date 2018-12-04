const mongoose = require('mongoose');
const homepages = mongoose.model('homepage');



const addhomepage = function (req, res) {
    homepages.create({
        description: req.body.description,
    }, (err, homepage) => {
        if (err) {
            res
                .status(400)
                .json(err);
        } else {
            res
                .status(201)
                .json(homepage);
        }
    });
};







const readhomepage = function (req, res) {
    if (req.params && req.params.homepageid) {
        homepages
            .findById(req.params.homepageid)
            .exec((err, homepage) => {
                if (!homepage) {
                    res
                        .status(404)
                        .json({
                            "message": "homepage not found"
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
                    .json(homepage);
            });
    } else {
        res
            .status(404)
            .json({
                "message": "No homepage in request"
            });
    }
};


module.exports= {
    readhomepage,
    addhomepage
};