class ClienteService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    modificarCliente(cliente){
        return this.userRepository.modificarCliente(cliente)
    }
    borrarCliente(id) {
        return this.userRepository.borrarClientePorId(id)
    }

    createUser(user) {
        return this.userRepository.createUser(user);
    }

    listarClientes() {
        return this.userRepository.getAllClientes();
    }
}

module.exports = ClienteService;