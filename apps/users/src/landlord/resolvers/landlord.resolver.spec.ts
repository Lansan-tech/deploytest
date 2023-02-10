import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LandlordResolver } from './landlord.resolver';
import { LandlordService } from '../landlord.service';

describe('LandlordResolver', () => {
  let resolver: LandlordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandlordResolver, LandlordService, PrismaService],
    }).compile();

    resolver = module.get<LandlordResolver>(LandlordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
