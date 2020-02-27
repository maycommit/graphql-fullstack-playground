import { Sequelize, DataTypes, Model } from 'sequelize';
import sequelize from '../../database';

export class User extends Model {}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.UUID,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
    },
    active: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  { sequelize, modelName: 'users' },
);

User.beforeCreate((user, options) => {});
