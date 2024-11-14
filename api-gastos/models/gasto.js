const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Gasto = sequelize.define('Gasto', {
  descricao: {
    type: DataTypes.STRING,
    allowNull: false
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  },
  data: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW
  }
});

module.exports = Gasto;
