class UserRepository {
    constructor(mysqlClient) {
        this.mysqlClient = mysqlClient;
    }

    createUser(user) {
        const sql = "INSERT INTO USERS "
        return new Promise(() => {
            this.mysqlClient.query(
                sql,
                [
                    user.name,
                    user.email,
                    user.password,
                    user.direccion,
                    user.phone
                ]
            )
        })
    }
}

module.exports = UserRepository;