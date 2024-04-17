import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { AdminServerConfig } from './config/admin-server-config';

@Module({
  imports: [AdminServerConfig],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
