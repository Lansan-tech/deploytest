import { Module } from '@nestjs/common';
import { AgentResolver } from './resolvers/agent.resolver';
import { AgentService } from './agent.service';
import { JwtStrategy } from '@app/common';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  providers: [AgentResolver, AgentService, JwtStrategy, UserResolver],
})
export class AgentModule {}
