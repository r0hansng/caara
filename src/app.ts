import express from 'express';
import type { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';

// Routes
import queryRoutes from './api/routes/query.routes.js';

// Load environment variables
dotenv.config();

class App {
  public app: Application;
  private readonly PORT: number;

  constructor() {
    this.app = express();
    this.PORT = Number(process.env.PORT) || 3000;

    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeErrorHandling();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
  }

  private initializeRoutes(): void {
    this.app.get('/health', (_req: Request, res: Response) => {
      res.status(200).json({ status: 'OK', service: 'CAARA' });
    });

    this.app.use('/api/query', queryRoutes);
  }

  private initializeErrorHandling(): void {
    this.app.use((err: Error, _req: Request, res: Response, _next: NextFunction) => {
      console.error('[ERROR]', err.message);

      res.status(500).json({
        error: 'Internal Server Error'
      });
    });
  }

  public listen(): void {
    this.app.listen(this.PORT, () => {
      console.log(`CAARA running on http://localhost:${this.PORT}`);
    });
  }
}

const server = new App();
server.listen();
