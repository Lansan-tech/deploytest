import { Module } from '@nestjs/common';
import { AgentResolver } from './resolvers/agent.resolver';
import { AgentService } from './agent.service';
import { JwtStrategy } from '@app/common';

@Module({
  providers: [AgentResolver, AgentService, JwtStrategy],
})
export class AgentModule {}
