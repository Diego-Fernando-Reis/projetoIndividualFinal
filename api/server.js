import express from 'express';
import db from './src/db.js';
import routes from './routes.js';
import cors from 'cors';

const app = express();

app.use(cors());

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