const request = require('request');


const apiOptions = {
    server: 'http://localhost:3000'
};

const _renderGame = function(req, res, responseBody){
    let message = null;
    if (!(responseBody)) {
        message = "API lookup error";
        responseBody = [];
    }
    console.log(responseBody);
    res.render('index', {
        title: 'GameSwap',

        games: responseBody,
        message: message,
    });
};




const game = function(req, res,body){
    const path = `/api/games/5c07c2e6929d291f5f3247dc` ;
    const postData = {
        gamename: body.gamename
    };
    const requestOptions = {
        url : apiOptions.server + path,
        method : 'GET',
        json : {},
    };
    console.log("Before request");
    request(requestOptions, (err, response, body) => {

            _renderGame(req, res, body);
            console.log(body.gamename);

        }

    );
};


module.exports = {
    game

};