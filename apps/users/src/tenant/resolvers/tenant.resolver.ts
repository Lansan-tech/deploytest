import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ReconResponse, Tenant } from '../entity/tenant.entity';
import { TenantDto } from '../Dtos/create-tenant.dto';
import { ReconcileDto } from '../Dtos/recon-account.dto';
import { TenantService } from '../tenant.service';
import { GetUser } from 'apps/auth/src/decorator';
import { User } from '../entity/user.entiry';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from 'apps/auth/src/guard';

@UseGuards(JwtGuard)
@Resolver()
export class TenantResolver {
  constructor(private tenantService: TenantService) {}

  @Mutation(() => Tenant)
  createClient(
    @GetUser() user: User,
    @Args('tenantInfo') tenantInfo: TenantDto,
  ) {
    return this.tenantService.create(user, tenantInfo);
  }

  @Mutation(() => ReconResponse)
  reconcileAccount(@Args('reconOptions') reconOptions: ReconcileDto) {
    return this.tenantService.reconcileAccount(reconOptions);
  }

  @Query(() => [Tenant])
  retriveAllTenants() {
    return this.tenantService.retriveAll();
  }

  @Query(() => Tenant)
  retriveOne(@Args('clientId') clientId: number) {
    return this.tenantService.retriveOne(clientId);
  }
}
