const homepage = function(req, res){
    res.render('homepage', { title: 'homepage' });
};



module.exports = {
    homepage
};