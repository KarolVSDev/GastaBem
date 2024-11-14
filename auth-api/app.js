require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { User } = require('./models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

// Rota de cadastro
app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log("Tentando criar usuário:", { name, email }); 
    const user = await User.create({ name, email, password });
    res.status(201).json({ message: 'Usuário criado com sucesso!', user });
  } catch (error) {
    console.error("Erro ao criar usuário:", error); 
    res.status(400).json({ error: 'Erro ao criar usuário!' });
  }
});

// Rota de login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
      console.log("Tentando fazer login para o email:", email);
      const user = await User.findOne({ where: { email } });
      
      if (!user || !bcrypt.compareSync(password, user.password)) {
          return res.status(401).json({ error: 'Credenciais inválidas!' });
      }

      const tokenPayload = { 
          id: user.id,
          name: user.name,
          email: user.email
      };
      
      console.log('Dados do usuário:', user.toJSON()); 
      console.log('Payload do Token:', tokenPayload);

      const token = jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({ 
          message: 'Login realizado com sucesso!', 
          token,
          userName: user.name 
      });
  } catch (error) {
      console.error("Erro ao fazer login:", error);
      res.status(500).json({ error: 'Erro no servidor!' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
