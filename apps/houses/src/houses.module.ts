import { Module } from '@nestjs/common';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';
import { ConnectionsModule } from './connections/connections.module';
import { JwtStrategy } from 'apps/auth/src/strategy/jwt.strategy';
import { HousesResolver } from './resolver/houses.resolver';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [ConnectionsModule, ServicesModule],
  controllers: [HousesController],
  providers: [HousesService, JwtStrategy, HousesResolver],
})
export class HousesModule {}
