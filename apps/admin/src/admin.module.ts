import { Module } from '@nestjs/common';
import { AdminServerConfig } from './config/admin-server-config';
import { AdminController } from './default/admin.controller';
import { CommonModule } from '../../../libs/dao/src/common/common.module';

@Module({
  imports: [
    /**
     * config
     */
    AdminServerConfig,
    /**
     * database connection
     */
    CommonModule,
  ],
  controllers: [AdminController],
  providers: [],
})
export class AdminModule {}
