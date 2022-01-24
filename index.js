const express = require("express");
const app = express();
const cookie = require("cookie-parser");
const path = require("path");

//importação das rotas
const usuarioRoute = require("./src/routes/usuarioRoute");

//configuração dos tipos de entradas de dados
app.use(cookie());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//configuração dos arquivos de visão (VIEWS)
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views"));

//pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, "src/public")));

//criação das rotas

app.use("/admin/usuario", usuarioRoute);

app.listen("3000", function () {
  console.log("Projeto rodando!");
});
