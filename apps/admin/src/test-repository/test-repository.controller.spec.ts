import { Test, TestingModule } from '@nestjs/testing';
import { TestRepositoryController } from './test-repository.controller';

describe('TestRepositoryController', () => {
  let controller: TestRepositoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestRepositoryController],
    }).compile();

    controller = module.get<TestRepositoryController>(TestRepositoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
