import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import CommonDatabaseConfig from '@libs/common/database/typeorm/config/common-database.config';

const environment = process.env.NODE_ENV || 'test';
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.admin.${environment}.env`,
      isGlobal: true,
      cache: true,
      load: [CommonDatabaseConfig],
    }),
  ],
})
export class AdminServerConfig {}
