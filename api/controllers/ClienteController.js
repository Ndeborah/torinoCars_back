const User = require("../../domain/clientes/Cliente");

class ClienteController {
    constructor(clienteService) {
        this.clienteService = clienteService;
        this.createUser = this.createUser.bind(this);
        this.listarClientes = this.listarClientes.bind(this);
        this.borrarCliente = this.borrarCliente.bind(this);
        this.modificarCliente = this.modificarCliente.bind(this);
        this.validarUsuario = this.validarUsuario.bind(this);
    }
    modificarCliente(req, res, next){
        const cliente = this.validarUsuario(req.body);
        cliente.id = req.params.id;
        this.clienteService.modificarCliente(cliente)
            .catch(err => res.send({error: err.message}))
            .then(res.status(204).send());
    }

    borrarCliente(req, res, next) {
        this.clienteService.borrarCliente(req.params.id)
            .catch(err => res.send({error: err.message}))
            .then(res.status(204).send());
    }

    listarClientes(req, res, next) {
        this.clienteService.listarClientes()
            .catch(
                err => res.send(err)
            ).then(result => {
                res.send(result)
            }
        )
    }

    createUser(req, res, next) {
        const {password, repeatPassword} = req.body;
        if (password !== repeatPassword) {
            res.status(400).send({
                'mensaje': 'Contraseña y repetición de contraseña no coinciden'
            });
            return;
        }
        const result = this.clienteService.createUser(this.validarUsuario(req.body));
        result
            .then(function (result) {
                console.log(result);
                res.setHeader('Content-Type', 'application/json');
                res.send(
                    {
                        'result': 'ok'
                    }
                );// oki
            })
            .catch(function (err) {
                res.send(err);
            })
    }

    validarUsuario(body) {
        const {name, email, phone, direccion, password, repeatPassword} = body;
        // id =
        if (!name || !email || !phone || !direccion || !password || !repeatPassword) {
            res.status(400).send({
                'mensaje': 'Revisar campos enviados'
            });
            return;
        }

        return new User(name, email, phone, direccion, password);
    }
}

module.exports = ClienteController;
