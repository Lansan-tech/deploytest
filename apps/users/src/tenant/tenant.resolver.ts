import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { Tenant } from '../entity/tenant.entity';
import { TenantDto } from './Dtos/create-tenant.dto';
import { TenantService } from './tenant.service';

@Resolver()
export class TenantResolver {
  constructor(private tenantService: TenantService) {}

  @Mutation(() => Tenant)
  createClient(@Args('tenantInfo') tenantInfo: TenantDto) {
    return this.tenantService.create(tenantInfo);
  }
}
