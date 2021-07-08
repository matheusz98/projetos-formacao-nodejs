class HomeController {
    async index(req, res) {
        res.send('Funfando!');
    }
}

module.exports = new HomeController();