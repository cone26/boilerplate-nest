import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminServerConfig } from './config/admin-server-config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import {
  adminTypeOrmOptions,
  gameTypeOrmOptions,
} from '@libs/common/database/typeorm/typeorm-module.options';

@Module({
  imports: [
    AdminServerConfig,
    TypeOrmExModule.forRoot(adminTypeOrmOptions),
    TypeOrmExModule.forRoot(gameTypeOrmOptions),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
