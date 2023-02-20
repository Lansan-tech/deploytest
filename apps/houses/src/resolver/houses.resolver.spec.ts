import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HousesService } from '../houses.service';
import { HousesResolver } from './houses.resolver';

describe('HousesResolver', () => {
  let resolver: HousesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousesResolver, HousesService, PrismaService],
    }).compile();

    resolver = module.get<HousesResolver>(HousesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
