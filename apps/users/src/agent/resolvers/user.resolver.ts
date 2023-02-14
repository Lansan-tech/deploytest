import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Agent } from '../entity/agent.entity';
import { AgentService } from './../agent.service';
import { User } from '../entity/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly agentService: AgentService) {}

  @ResolveField(() => Agent)
  public async tenant(@Parent() user: User): Promise<Agent> {
    return await this.agentService.getAgentByUser(user.id);
  }
}
