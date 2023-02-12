import { Test, TestingModule } from '@nestjs/testing';
import { HousesResolver } from './houses.resolver';

describe('HousesResolver', () => {
  let resolver: HousesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousesResolver],
    }).compile();

    resolver = module.get<HousesResolver>(HousesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
