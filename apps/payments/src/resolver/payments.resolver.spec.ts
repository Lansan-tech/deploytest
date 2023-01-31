import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsService } from '../payments.service';
import { PaymentsResolver } from './payments.resolver';

describe('PaymentsResolver', () => {
  let resolver: PaymentsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PaymentsResolver, PaymentsService, PrismaService],
    }).compile();

    resolver = module.get<PaymentsResolver>(PaymentsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
