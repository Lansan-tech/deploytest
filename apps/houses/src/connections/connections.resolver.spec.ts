import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionsResolver } from './connections.resolver';
import { ConnectionsService } from './connections.service';

describe('ConnectionsResolver', () => {
  let resolver: ConnectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionsResolver, ConnectionsService, PrismaService],
    }).compile();

    resolver = module.get<ConnectionsResolver>(ConnectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
