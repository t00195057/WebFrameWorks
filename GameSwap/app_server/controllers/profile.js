const request = require('request');


const apiOptions = {
    server: 'http://localhost:3000'
};
// if (process.env.NODE_ENV === 'production') {
//     apiOptions.server = "http://localhost:3000";
// }

const renderGame = function(req, res, responseBody){
    let message = null;
    if (!(responseBody)) {
        message = "API lookup error";
        responseBody = [];
    }
    console.log(responseBody);
    res.render('index', {
        title: 'GameSwap',

        abouts: responseBody,
        message: message,
    });
};

/* GET about page */

const about = function(req, res,body){
    const path = `/api/games/5c06db3bc36c945c0cebc143` ;
    const postData = {
        paragraph: body.paragraph
    };
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
    };
    console.log("Before request");
    request(requestOptions, (err, response, body) => {

            _renderGame(req, res, body);
            console.log(body.paragraph);

        }

    );
};


module.exports = {
    about

};