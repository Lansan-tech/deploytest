import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AgentService } from '../agent.service';
import { AgentResolver } from './agent.resolver';

describe('AgentResolver', () => {
  let resolver: AgentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentResolver, AgentService, PrismaService],
    }).compile();

    resolver = module.get<AgentResolver>(AgentResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
