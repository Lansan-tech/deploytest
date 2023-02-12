import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionsResolver } from './connections.resolver';

describe('ConnectionsResolver', () => {
  let resolver: ConnectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionsResolver],
    }).compile();

    resolver = module.get<ConnectionsResolver>(ConnectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
