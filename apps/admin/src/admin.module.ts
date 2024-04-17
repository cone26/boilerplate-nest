import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminServerConfig } from './config/admin-server-config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';

@Module({
  imports: [
    AdminServerConfig,
    // orm option
    TypeOrmExModule.forRoot(),
  ],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
