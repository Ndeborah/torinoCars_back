class ClienteRepository {
    constructor(mysqlClient) {
        this.mysqlClient = mysqlClient;
    }

    modificarCliente(cliente){
        const sql = "UPDATE clientes SET nombre = ?,email = ?, telefono= ?, direccion = ?, password = ? WHERE id=?";
        return this.mysqlClient.query(
            sql,
            [
                cliente.nombre,
                cliente.email,
                cliente.telefono,
                cliente.direccion,
                cliente.password,
                cliente.id,
            ]
            )
    }
    borrarClientePorId(idCliente) {
        const sql = "DELETE FROM clientes WHERE clientes.id = ?";
        return this.mysqlClient.query(sql, [idCliente]);
    }

    async getAllClientes() {
        const sql = "SELECT * FROM clientes";
        const [results, fields] = await this.mysqlClient.query(sql);
        return results;
    }

    createUser(user) {
        const sql = "INSERT INTO clientes (nombre, email, telefono, direccion, password) VALUES (?, ?, ?, ?, ?); "
        return this.mysqlClient.query(
            sql,
            [
                user.nombre,
                user.email,
                user.telefono,
                user.direccion,
                user.password,

            ]
        )
    }
}

module.exports = ClienteRepository;