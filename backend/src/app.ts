import express, { Request, Response } from 'express';

const app = express();

app.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: "Deu bão!" });
});

export default app;