import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import commonDatabaseConfig from '@libs/dao/config/common/common-database.config';

const environment = process.env.NODE_ENV || 'test';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.admin.${environment}.env`,
      isGlobal: true,
      cache: true,
      load: [commonDatabaseConfig],
    }),
  ],
})
export class AdminServerConfig {}
