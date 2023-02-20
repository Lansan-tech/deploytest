import { Mutation, Resolver } from '@nestjs/graphql';
import { GetUser } from '@app/common';
import { AgentService } from '../agent.service';
import { AgentDto } from '../Dtos';
import { Agent } from '../entity/agent.entity';
import { User } from '../entity/user.entity';

@Resolver(() => Agent)
export class AgentResolver {
  constructor(private agentService: AgentService) {}

  @Mutation(() => Agent)
  creeateAgent(@GetUser() user: User, agentDto: AgentDto) {
    return this.agentService.create(user, agentDto);
  }
}
