const Usuario = require("../model/Usuario");

async function abreadd(req, res) {
  res.render("usuario/add.ejs", {});
}
async function list(req, res) {
  let usuarios = Usuario.findAll();
  res.render("usuario/lst.ejs", { Usuarios: usuarios });
}

module.exports = { abreadd, list };
