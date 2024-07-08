var express = require('express');
var router = express.Router();
const bodyParser = require('body-parser');
const db = require('../../infrastructure/mysql/MysqlClient');
const ClienteRepository = require('../../infrastructure/mysql/ClienteRepository');
const ClienteService = require("../../domain/clientes/clienteService");
const ClienteController = require("../controllers/ClienteController");
const {json} = require("express");
const jsonParser = bodyParser.json();

const clienteRepository = new ClienteRepository(db);
const clienteService = new ClienteService(clienteRepository);
const clienteController = new ClienteController(clienteService);

/* GET clientes listing. */
router.get('/', jsonParser, clienteController.listarClientes);

router.post('/', jsonParser, clienteController.createUser);

router.delete('/:id', jsonParser, clienteController.borrarCliente);

router.put('/:id', jsonParser, clienteController.modificarCliente);

module.exports = router;
