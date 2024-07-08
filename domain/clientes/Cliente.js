class Cliente {
    constructor(nombre, email, telefono, direccion, password,id= null ) {
        this.nombre = nombre;
        this.email = email;
        this.telefono = telefono;
        this.direccion = direccion;
        this.password = password;
        this.id = id;
    }
}

module.exports = Cliente;