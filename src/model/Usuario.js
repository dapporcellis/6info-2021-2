const { Model, DataTypes } = require("sequelize");

class Usuario extends Model {
  static init(sequelize) {
    super.init(
      {
        foto: DataTypes.STRING,
        nome: DataTypes.STRING,
        email: DataTypes.STRING,
        pronome: DataTypes.STRING,
        datadenascimento: DataTypes.DATE,
        cargo: DataTypes.STRING,
        senha: DataTypes.STRING,
      },
      { sequelize, freezeTableName: true }
    );
  }
}

module.exports = Usuario;
