import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './resolvers/tenant.resolver';
import { TenantController } from './tenant.controller';
import { JwtStrategy } from 'apps/auth/src/strategy/jwt.strategy';

@Module({
  imports: [],
  providers: [TenantService, TenantResolver, JwtStrategy],
  controllers: [TenantController],
})
export class TenantModule {}
