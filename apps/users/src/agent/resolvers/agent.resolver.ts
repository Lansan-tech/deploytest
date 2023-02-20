import { Mutation, Resolver } from '@nestjs/graphql';
import { GetUser } from '@app/common';
import { AgentService } from '../agent.service';
import { CreateAgentDto } from '../Dtos';
import { AgentUser } from '../entity/agent.entity';
import { User } from '../entity/user.entity';

@Resolver(() => AgentUser)
export class AgentResolver {
  constructor(private agentService: AgentService) {}

  @Mutation(() => AgentUser)
  creeateAgent(@GetUser() user: User, agentDto: CreateAgentDto) {
    return this.agentService.create(user, agentDto);
  }
}
