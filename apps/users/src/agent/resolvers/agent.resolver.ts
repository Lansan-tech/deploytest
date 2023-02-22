import {
  Args,
  Int,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
  Query,
} from '@nestjs/graphql';
import { GetUser, JwtGuard } from '@app/common';
import { AgentService } from '../agent.service';
import { CreateAgentDto, UpdateAgentDto } from '../Dtos';
import { AgentUser } from '../entity/agent.entity';
import { User } from '../entity/user.entity';
import { UseGuards } from '@nestjs/common';
import { Tenant } from '../../tenant/entity/tenant.entity';

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

  @Query(() => AgentUser)
  async agentProfle(@GetUser() user: User) {
    return await this.agentService.findAgent(user.id);
  }

  @ResolveField((of) => User)
  user(@Parent() tenant: AgentUser): any {
    return { __typename: 'User', id: tenant.userId };
  }
}
