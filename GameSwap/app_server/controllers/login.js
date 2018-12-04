const login = function(req, res){
    res.render('login', { title: 'login' });
};



module.exports = {
    login
};