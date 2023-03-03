import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AgentService } from './agent.service';

describe('AgentService', () => {
  let service: AgentService;
  const agentStub = {
    agent: 1,
    userId: 1,
    name: 'test agent',
    title: 'Testing agent',
    username: 'testagent',
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentService, PrismaService],
    }).compile();

    service = module.get<AgentService>(AgentService);
  });

  it('Should create a new Agent', async () => {
    jest.spyOn(service, 'create').mockImplementation(async () => agentStub);

    const agent = await service.create(
      { id: 1, imageUrl: '', name: '' },
      agentStub,
    );
    expect(agent).toMatchObject({
      username: agentStub.username,
    });
  });

  it('Should Update Agent details', async () => {
    const updateAgent = {
      username: 'testagentupdated',
    };

    jest.spyOn(service, 'update').mockImplementation(async () => {
      return {
        ...agentStub,
        username: updateAgent.username,
      };
    });

    const update = await service.update(1, updateAgent);

    expect(update).toMatchObject({
      username: updateAgent.username,
    });
  });
});
