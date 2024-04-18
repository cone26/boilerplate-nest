import { TypeOrmModule } from '@nestjs/typeorm';
import { TestRepository } from '@libs/dao/common/test-repository/test-repository-entity';
import { TestRepositoryRepository } from '@libs/dao/common/test-repository/test-repository-repository';
import { Module } from '@nestjs/common';

@Module({
  imports: [TypeOrmModule.forFeature([TestRepository])],
  providers: [TestRepositoryRepository],
})
export class TestRepositoryModule {}
