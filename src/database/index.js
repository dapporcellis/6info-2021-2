const Sequelize = require("sequelize");

const dbconfig = require("../config/config");

const Usuario = require("../model/Usuario");

const conexao = new Sequelize(dbconfig);

Usuario.init(conexao);

module.exports = conexao;
