import { Test, TestingModule } from '@nestjs/testing';
import { CaretakerResolver } from './caretaker.resolver';

describe('CaretakerResolver', () => {
  let resolver: CaretakerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaretakerResolver],
    }).compile();

    resolver = module.get<CaretakerResolver>(CaretakerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
