class User {
    constructor(name, email, phone, direccion, password,id= null ) {

        this.name = name;
        this.email = email;
        this.phone = phone;
        this.direccion = direccion;
        this.password = password;
        this.id = id;
    }
}

module.exports = User;