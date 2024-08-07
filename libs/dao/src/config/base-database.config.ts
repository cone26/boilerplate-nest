import { registerAs } from '@nestjs/config';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export default registerAs('base-database', () => ({
  type: 'mysql' as const,
  charset: 'utf8mb4',
  timezone: 'Z',
  extra: {
    connectionLimit: Number(process.env.DB_CONNECTION_LIMIT) || 10,
  },
  maxQueryExecutionTime: 1000,
  logging: [],
  bigNumberStrings: false,
  namingStrategy: new SnakeNamingStrategy(),
}));
