import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionsResolver } from './connections.resolver';
import { ElectrictyConnectionService } from './electrictyConnections.service';
import { WaterConnectionService } from './waterConnection.service';

describe('ConnectionsResolver', () => {
  let resolver: ConnectionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ConnectionsResolver,
        ElectrictyConnectionService,
        PrismaService,
        WaterConnectionService,
      ],
    }).compile();

    resolver = module.get<ConnectionsResolver>(ConnectionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
