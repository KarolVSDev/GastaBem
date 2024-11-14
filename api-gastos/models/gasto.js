
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Gasto = sequelize.define('Gasto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  tableName: 'gastos',
  timestamps: false,
});

module.exports = Gasto;
