require('dotenv').config();

const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database.js');
const Gasto = require('./models/gasto');


const app = express();
const port = 3000;


app.use(cors());



app.use(express.json());


app.get('/', (req, res) => {
  res.send('Bem-vindo à API Gasta Bem!');
});

sequelize.sync()
  .then(() => {
    console.log('Conectado com sucesso ao banco de dados!');
  })
  .catch((err) => {
    console.error('Erro: Falha ao conectar com o banco de dados:', err);
  });


app.get('/api/gastos', async (req, res) => {
  try {
    const gastos = await Gasto.findAll();
    res.json(gastos);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});


app.post('/api/gastos', async (req, res) => {
  try {
    const { descricao, valor, categoria } = req.body;
    const novoGasto = await Gasto.create({ 
      descricao, 
      valor, 
      categoria,
      data: new Date()
    });
    res.status(201).json(novoGasto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao adicionar dados' });
  }
});



app.put('/api/gastos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { descricao, valor, categoria } = req.body;
    const gasto = await Gasto.findByPk(id);
    if (!gasto) {
      return res.status(404).json({ error: 'Dados não encontrados' });
    }
    gasto.descricao = descricao;
    gasto.valor = valor;
    gasto.categoria = categoria;
    await gasto.save();
    res.json(gasto);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar dados' });
  }
});


app.delete('/api/gastos/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const gasto = await Gasto.findByPk(id);
    if (!gasto) {
      return res.status(404).json({ error: 'Dado não encontrado' });
    }
    await gasto.destroy();
    res.json({ message: 'Dado removido com sucesso' });
  } catch (err) {
    res.status(500).json({ error: 'Erro ao remover o dado' });
  }
});


app.listen(port, () => {
  console.log(`API rodando na porta ${port}`);
});


