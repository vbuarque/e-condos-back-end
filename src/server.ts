import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import router from '../src/routes/routes';

class Server {
  private app: Application;
  private port: number;

  constructor(port: number) {
    this.app = express();
    this.app.use(cors());
    this.port = port;
    this.middlewares();
    this.routes();
    this.connectDatabase();
  }

  private middlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.use('/api', router);
  }

  private async connectDatabase() {
    try {
      await mongoose.connect('mongodb+srv://viniciusbuarque:NaJmpJ1Tkge2prXW@secretcristimas.shry3pp.mongodb.net/?retryWrites=true&w=majority');
      console.log('Banco de dados conectado');
    } catch (error) {
      console.error('Erro ao conectar ao banco de dados:', error);
    }
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor rodando na porta ${this.port}`);
    });
  }
}

const server = new Server(3000);
server.listen();
