import { DataSourceOptions } from 'typeorm';

export const defaultTypeOrmOptions: DataSourceOptions = {
  type: 'mysql',
};

export const adminTypeOrmOptions: DataSourceOptions = {
  ...defaultTypeOrmOptions,
  host: process.env.ADMIN_DB_HOST,
  port: Number(process.env.ADMIN_DB_PORT),
  username: process.env.ADMIN_DB_USER,
  password: process.env.ADMIN_DB_PW,
  database: process.env.ADMIN_DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
};

export const gameTypeOrmOptions: DataSourceOptions = {
  ...defaultTypeOrmOptions,
  host: process.env.GAME_DB_HOST,
  port: Number(process.env.GAME_DB_PORT),
  username: process.env.GAME_DB_USER,
  password: process.env.GAME_DB_PW,
  database: process.env.GAME_DB_NAME,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: false,
};
