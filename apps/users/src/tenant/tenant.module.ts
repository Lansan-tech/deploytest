import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './resolvers/tenant.resolver';
import { TenantController } from './tenant.controller';
import { JwtStrategy, RegistrationModule } from '@app/common';

@Module({
  imports: [RegistrationModule],
  providers: [TenantService, TenantResolver, JwtStrategy],
  controllers: [TenantController],
})
export class TenantModule {}
