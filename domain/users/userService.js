class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }

    async createUser(user){
        this.userRepository.createUser(user);
    }
}

module.exports = UserService;