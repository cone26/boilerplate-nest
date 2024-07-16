import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { Module } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { UserDbRepository } from './repositories/user-db.repository';
import { UsersRepository } from './interfaces/user-repository.interface';
import commonDatabaseConfig from '@libs/dao/config/common/common-database.config';

@Module({
  imports: [
    TypeOrmExModule.forFeatures(
      [UserDbRepository],
      [commonDatabaseConfig().name],
    ),
  ],
  providers: [
    {
      provide: UsersRepository,
      inject: [UserDbRepository],
      useFactory: (repo: UserDbRepository): UsersRepository => repo,
    },
  ],
  exports: [UsersRepository],
})
export class UsersModule {
  constructor(
    @InjectDataSource(commonDatabaseConfig().name)
    private readonly dataSource: DataSource,
  ) {}

  async onModuleDestroy(): Promise<void> {
    await this.dataSource.destroy();
  }
}
