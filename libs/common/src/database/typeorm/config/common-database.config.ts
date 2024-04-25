import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
export default registerAs('common-database', () => ({
  type: process.env.COMMON_DB_TYPE,
  namingStrategy: new SnakeNamingStrategy(),
  charset: process.env.DB_CHARSET,
  timezone: 'Z',
  extra: {
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  },
  maxQueryExecutionTime: 1000,
  logging: [],
  host: process.env.COMMON_DB_HOST,
  port: Number(process.env.COMMON_DB_PORT),
  username: process.env.COMMON_DB_USER,
  password: process.env.COMMON_DB_PW,
  name: process.env.COMMON_DB_NAME,
  database: process.env.COMMON_DB_NAME,
  synchronize:
    process.env.COMMON_DB_SYNCHRONIZE &&
    JSON.parse(process.env.COMMON_DB_SYNCHRONIZE),
}));
