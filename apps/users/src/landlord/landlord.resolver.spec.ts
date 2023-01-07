import { Test, TestingModule } from '@nestjs/testing';
import { LandlordResolver } from './landlord.resolver';

describe('LandlordResolver', () => {
  let resolver: LandlordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandlordResolver],
    }).compile();

    resolver = module.get<LandlordResolver>(LandlordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
