const express = require("express");
const router = express.Router();
const usuarioController = require("../controller/usuarioController");

//ABRE ADD
router.get("/add", usuarioController.abreadd);

//ADICIONAR DADOS DO USUÁRIO NO BANCO
router.post("/add", function (req, res) {});

//LISTAR TODOS OS USUÁRIOS
router.get("/", usuarioController.list);

//LISTAR OS USUÁRIOS COM FILTRO
router.post("/", function (req, res) {});

//ABRE EDITA
router.get("/edt", function (req, res) {});

//SALVAR DADOS ALTERADOS DO USUÁRIO
router.get("/edt", function (req, res) {});

//DELETAR USUÁRIO
router.get("/del", function (req, res) {});

module.exports = router;
