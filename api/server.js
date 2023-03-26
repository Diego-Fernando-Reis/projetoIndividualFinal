import express from 'express';
import db from './src/db.js';
import routes from './routes.js';
import Filme from './src/models/filmeModel.js';
import User from './src/models/userModel.js';
import FilmeVisto from './src/models/filmeVistoModel.js';
import FilmeParaVer from './src/models/filmeParaVerModel.js';

const app = express();

db.sync()
  .then(() => {
    console.log('Banco de dados criado com sucesso!');
  })
  .catch((error) => {
    console.log('Erro ao criar o banco de dados:', error);
  });

app.use(express.json());
app.use('/', routes);

app.listen(3000, () => console.log('Servidor iniciado na porta 3000'));