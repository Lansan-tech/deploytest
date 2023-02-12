import { Module } from '@nestjs/common';
import { JwtStrategy } from 'apps/auth/src/strategy/jwt.strategy';
import { LandlordService } from './landlord.service';
import { LandlordResolver } from './resolvers/landlord.resolver';

@Module({
  imports: [],
  providers: [LandlordService, LandlordResolver, JwtStrategy],
  controllers: [],
})
export class LandlordModule {}
