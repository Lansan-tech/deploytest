import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { ReconResponse, Tenant } from '../entity/tenant.entity';
import { TenantDto } from '../Dtos/create-tenant.dto';
import { ReconcileDto } from '../Dtos/recon-account.dto';
import { TenantService } from '../tenant.service';
import { GetUser } from '@app/common';
import { User } from '../../entity/user.entity';
import { UseGuards } from '@nestjs/common';
import { JwtGuard } from '@app/common/auth/guard';

@UseGuards(JwtGuard)
@Resolver(() => Tenant)
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

  @ResolveField((of) => User)
  user(@Parent() tenant: Tenant): any {
    return { __typename: 'User', id: tenant.userId };
  }
}
