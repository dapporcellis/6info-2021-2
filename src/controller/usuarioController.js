async function abreadd(req, res) {
  res.render("usuario/add.ejs", {});
}
async function list(req, res) {
  res.render("usuario/lst.ejs", {});
}

module.exports = { abreadd, list };
