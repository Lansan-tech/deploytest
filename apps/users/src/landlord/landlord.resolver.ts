import { Resolver, Query, Args } from '@nestjs/graphql';
import { LandlordDto } from './Dtos/landlord-input.dto';
import { Landlord } from '../entity/landlord.entity';
import { LandlordService } from './landlord.service';

@Resolver()
export class LandlordResolver {
  constructor(private landlordService: LandlordService) {}
  @Query(() => Landlord)
  createLandlord(@Args('landLordInput') landlordInput: LandlordDto) {
    return this.landlordService.create(landlordInput);
  }
}
