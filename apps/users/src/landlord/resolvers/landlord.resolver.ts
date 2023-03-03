import { UseGuards } from '@nestjs/common';
import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { GetUser } from '@app/common';
import { JwtGuard } from '@app/common';
import { CreateLandlordDto } from '../Dtos/landlord-input.dto';
import { Landlord } from '../entity/landlord.entity';
import { User } from '../../entity/user.entity';
import { LandlordService } from '../landlord.service';

@UseGuards(JwtGuard)
@Resolver()
export class LandlordResolver {
  constructor(private landlordService: LandlordService) {}
  @Mutation(() => Landlord)
  createLandlord(
    @GetUser() user: User,
    @Args('createLandLordInput') createLandlordInput: CreateLandlordDto,
  ) {
    return this.landlordService.create(createLandlordInput);
  }
}
