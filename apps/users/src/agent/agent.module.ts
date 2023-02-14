import { Module } from '@nestjs/common';
import { AgentResolver } from './agent.resolver';
import { AgentService } from './agent.service';

@Module({
  providers: [AgentResolver, AgentService]
})
export class AgentModule {}
