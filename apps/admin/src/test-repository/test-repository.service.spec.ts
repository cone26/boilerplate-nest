import { Test, TestingModule } from '@nestjs/testing';
import { TestRepositoryService } from './test-repository.service';

describe('TestRepositoryService', () => {
  let service: TestRepositoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestRepositoryService],
    }).compile();

    service = module.get<TestRepositoryService>(TestRepositoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
