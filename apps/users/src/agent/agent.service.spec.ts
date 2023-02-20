import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AgentService } from './agent.service';
import { IntergrationTestManager } from '@app/common';

describe('AgentService', () => {
  let service: AgentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AgentService, PrismaService],
    }).compile();

    service = module.get<AgentService>(AgentService);
  });

  it('Should create a new Agent', () => {
    const agent = {
      name: '',
      title: '',
      username: '',
    };
    const user = { id: 1 };

    const created = service.create(user, agent);

    expect(created).toMatchObject({
      username: agent.username,
    });
  });

  it('Should Update Agent details', () => {
    const updateAgent = {
      name: '',
      title: '',
      username: '',
    };

    const update = service.update(1, updateAgent);

    expect(update).toMatchObject({
      username: updateAgent.username,
    });
  });
});
