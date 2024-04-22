import { Module } from '@nestjs/common';
import { AdminServerConfig } from './config/admin-server-config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { commonTypeOrmModuleOptions } from '@libs/common/database/typeorm/typeorm-module.options';
import { AdminController } from './default/admin.controller';

@Module({
  imports: [
    AdminServerConfig,
    TypeOrmExModule.forRoot(commonTypeOrmModuleOptions),
  ],
  controllers: [AdminController],
  providers: [],
})
export class AdminModule {}
