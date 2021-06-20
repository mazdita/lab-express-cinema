module.exports.home = (req, res, next) => {
    res.render('index', {tittle: 'Cinema Ironhack'})
}