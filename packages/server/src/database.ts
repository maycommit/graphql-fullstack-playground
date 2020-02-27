import { Sequelize } from 'sequelize';
import {
  dbName,
  dbUsername,
  dbPassword,
  dbDialect,
  dbHost,
  dbPort,
} from './config';

const sequelize = new Sequelize(dbName, dbUsername, dbPassword, {
  dialect: dbDialect,
  host: dbHost,
  port: dbPort,
});

sequelize
  .authenticate()
  .then(() => console.log('Conncetion success'))
  .catch(() => console.error('Connection error'));

sequelize.sync();

export default sequelize;
