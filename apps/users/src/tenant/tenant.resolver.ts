import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReconResponse, Tenant } from '../entity/tenant.entity';
import { TenantDto } from './Dtos/create-tenant.dto';
import { ReconcileDto } from './Dtos/recon-account.dto';
import { TenantService } from './tenant.service';

@Resolver()
export class TenantResolver {
  constructor(private tenantService: TenantService) {}

  @Mutation(() => Tenant)
  createClient(@Args('tenantInfo') tenantInfo: TenantDto) {
    return this.tenantService.create(tenantInfo);
  }

  @Mutation(() => ReconResponse)
  reconcileAccount(@Args('reconOptions') reconOptions: ReconcileDto) {
    return this.tenantService.reconcileAccount(reconOptions);
  }

  @Query(() => [Tenant])
  retriveAll() {
    return this.tenantService.retriveAll();
  }

  @Query(() => Tenant)
  retriveOne(@Args('clientId') clientId: number) {
    return this.tenantService.retriveOne(clientId);
  }
}
