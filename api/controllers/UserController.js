const User = require("../../domain/users/User");

class UserController {
    constructor(userService) {
        this.userService = userService;
        this.createUser = this.createUser.bind(this);
    }

    createUser(req, res, next) {
        const {name, email, phone, direccion, password, repeatPassword} = req.body;
        // id =
        if (!name || !email || !phone || !direccion || !password || !repeatPassword) {
            res.status(400).send('Bad Request');
            return;
        }
        if (password !== repeatPassword) {
            res.status(400).send('Contraseña y repetición de contraseña no coinciden');
            return;
        }
        const user = new User(name, email, phone, direccion, password);
        this.userService.createUser(user)
            .then(function (result) {
                res.send('oki');
            })
            .catch(function (err) {
                next(err);
            })
    }
}

module.exports = UserController;
