import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import * as bodyParser from 'body-parser'
import { createConnection } from 'typeorm';
import 'reflect-metadata';
import routes from './src/routes';
import { appPort } from './config/app.config';
import HttpStatusCode from './src/constants/httpStatusCode.constants';
import { errorMiddleware } from './src/helpers/error.handler';

createConnection()
  .then(async (connection) => {

    await connection.runMigrations();
    const app = express();

    app.use(bodyParser.json())
    app.use(cors({ origin: true }));

    app.use('/api', routes);
    app.use(errorMiddleware)
    app.use('/', (req, res) => res.sendStatus(HttpStatusCode.OK)); // health check

    app.listen(appPort, (): void => {
      console.log(`Server is running on port ${appPort}`);
    });
  })
  .catch((err) => console.log(err));
