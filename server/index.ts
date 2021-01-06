import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createConnection } from 'typeorm';
import routes from './src/routes';
import { appPort } from './config/app.config';
import HttpStatusCode from './src/constants/httpStatusCode.constants';

createConnection()
  .then(async (connection) => {

    await connection.runMigrations();
    const app = express();

    app.use('/api', routes);

    app.use('/', (req, res) => res.sendStatus(HttpStatusCode.OK)); // health check

    app.listen(appPort, (): void => {
      console.log(`Server is running on port ${appPort}`);
    });
  })
  .catch((err) => console.log(err));
