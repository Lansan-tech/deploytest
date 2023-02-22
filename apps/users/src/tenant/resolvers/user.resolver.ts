import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Tenant } from '../entity/tenant.entity';
import { TenantService } from './../tenant.service';
import { User } from '../entity/user.entiry';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly tenantService: TenantService) {}

  @ResolveField(() => Tenant)
  public async tenant(@Parent() user: User): Promise<Tenant> {
    return await this.tenantService.getClientuser(user.id);
  }
}
