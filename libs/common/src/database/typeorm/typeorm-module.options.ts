import { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import * as process from 'process';

export const defaultTypeOrmOptions: DataSourceOptions = {
  type: 'mysql',
  namingStrategy: new SnakeNamingStrategy(),
  charset: 'utf8mb4',
  timezone: 'Z',
  extra: {
    connectionLimit:
      process.env.NODE_ENV === 'prod'
        ? Number(process.env.DB_CONNECTION_LIMIT)
        : 10,
  },
  // logging: ['query']
};

export const adminTypeOrmOptions: DataSourceOptions = {
  ...defaultTypeOrmOptions,
  host: process.env.ADMIN_DB_HOST,
  port: Number(process.env.ADMIN_DB_PORT),
  username: process.env.ADMIN_DB_USER,
  password: process.env.ADMIN_DB_PW,
  database: process.env.ADMIN_DB_NAME,
  entities: ['dist/libs/dao/src/admin/**/*.entity.!(js.map){,+(ts,js)}'],
  synchronize: false, // Already have data in Db, if not -> true
};

export const gameTypeOrmOptions: DataSourceOptions = {
  ...defaultTypeOrmOptions,
  host: process.env.GAME_DB_HOST,
  port: Number(process.env.GAME_DB_PORT),
  username: process.env.GAME_DB_USER,
  password: process.env.GAME_DB_PW,
  database: process.env.GAME_DB_NAME,
  entities: ['dist/libs/dao/src/game/**/*.entity.!(js.map){,+(ts,js)}'],
  synchronize: false, // Already have data in Db, if not -> true
};
