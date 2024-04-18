import { Module } from '@nestjs/common';
import { AdminServerConfig } from './config/admin-server-config';
import { commonTypeOrmOptions } from '@libs/common/database/typeorm/typeorm-module.options';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepositoryController } from './test-repository/test-repository.controller';
import { TestRepositoryService } from './test-repository/test-repository.service';

@Module({
  imports: [AdminServerConfig, TypeOrmModule.forRoot(commonTypeOrmOptions)],
  controllers: [TestRepositoryController],
  providers: [TestRepositoryService],
})
export class AdminModule {}
