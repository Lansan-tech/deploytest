import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { AgentUser } from '../entity/agent.entity';
import { AgentService } from './../agent.service';
import { User } from '../entity/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly agentService: AgentService) {}

  @ResolveField(() => AgentUser)
  public async agent(@Parent() user: User): Promise<AgentUser> {
    return await this.agentService.getAgentByUser(user.id);
  }
}
