var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../../infrastructure/mysql/MysqlClient');
const UserRepository = require('../../infrastructure/mysql/UserRepository');
const UserService = require("../../domain/users/userService");
const UserController = require("../controllers/UserController");
const jsonParser = bodyParser.json();

const userRepository = new UserRepository(db);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.post('/', jsonParser, userController.createUser)

module.exports = router;
