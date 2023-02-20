import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { GetUser, JwtGuard } from '@app/common';
import { AgentService } from '../agent.service';
import { CreateAgentDto, UpdateAgentDto } from '../Dtos';
import { AgentUser } from '../entity/agent.entity';
import { User } from '../entity/user.entity';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtGuard)
@Resolver(() => AgentUser)
export class AgentResolver {
  constructor(private agentService: AgentService) {}

  @Mutation(() => AgentUser)
  createAgent(
    @GetUser() user: User,
    @Args('agentDto') agentDto: CreateAgentDto,
  ) {
    return this.agentService.create(user, agentDto);
  }

  @Mutation(() => AgentUser)
  updateAgent(
    @Args({ name: 'agent', type: () => Int }) id: number,
    @Args('updateAgentDto') updateAgentDto: UpdateAgentDto,
  ) {
    return this.agentService.update(id, updateAgentDto);
  }
}
