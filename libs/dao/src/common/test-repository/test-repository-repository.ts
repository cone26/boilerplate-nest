import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { TestRepository } from '@libs/dao/common/test-repository/test-repository-entity';

@Injectable()
export class TestRepositoryRepository extends Repository<TestRepository> {
  constructor(private dataSource: DataSource) {
    super(TestRepository, dataSource.createEntityManager());
  }

  async findById(id: number): Promise<TestRepository> {
    return this.findById(id);
  }
}
