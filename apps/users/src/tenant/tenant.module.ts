import { forwardRef, Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantResolver } from './resolvers/tenant.resolver';
import { TenantController } from './tenant.controller';
import { JwtStrategy, RegistrationModule } from '@app/common';

@Module({
  imports: [],
  providers: [TenantService, TenantResolver, JwtStrategy],
  controllers: [],
})
export class TenantModule {}
