import { Module } from '@nestjs/common';
import { ConnectionsResolver } from './connections.resolver';
import { ElectrictyConnectionService } from './electrictyConnections.service';
import { WaterConnectionService } from './waterConnection.service';

@Module({
  providers: [
    ConnectionsResolver,
    ElectrictyConnectionService,
    WaterConnectionService,
  ],
})
export class ConnectionsModule {}
