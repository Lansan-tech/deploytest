import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Landlord } from '../entity/landlord.entity';
import { LandlordService } from './../landlord.service';
import { User } from '../entity/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly landlordService: LandlordService) {}

  @ResolveField(() => Landlord)
  public async landlord(@Parent() user: User): Promise<Landlord> {
    return await this.landlordService.getLandlordUser(user.id);
  }
}
