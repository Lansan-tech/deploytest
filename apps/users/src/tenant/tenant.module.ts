import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './resolvers/tenant.resolver';
import { JwtStrategy } from '@app/common';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [],
  providers: [TenantService, TenantResolver, JwtStrategy, UserResolver],
  controllers: [],
})
export class TenantModule {}
