import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GetUser } from 'apps/auth/src/decorator';
import { JwtGuard } from 'apps/auth/src/guard';
import { LandlordDto } from '../Dtos/landlord-input.dto';
import { Landlord } from '../entity/landlord.entity';
import { User } from '../entity/user.entity';
import { LandlordService } from '../landlord.service';

@UseGuards(JwtGuard)
@Resolver()
export class LandlordResolver {
  constructor(private landlordService: LandlordService) {}
  @Mutation(() => Landlord)
  createLandlord(
    @GetUser() user: User,
    @Args('landLordInput') landlordInput: LandlordDto,
  ) {
    return this.landlordService.create(user, landlordInput);
  }
}
