import { Module } from '@nestjs/common';
import { ConnectionsResolver } from './connections.resolver';
import { ConnectionsService } from './connections.service';

@Module({
  providers: [ConnectionsResolver, ConnectionsService],
})
export class ConnectionsModule {}
