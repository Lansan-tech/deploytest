import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { GetUser, JwtGuard } from '@app/common';
import { CreatePropertyInput } from '../Dtos/create-property.dto';
import { HousesService } from '../houses.service';
import { Property } from '../entity/property.entity';
import { User } from '../../../users/src/entity/user.entity';

@UseGuards(JwtGuard)
@Resolver(() => Property)
export class HousesResolver {
  constructor(private housesService: HousesService) {}

  @Mutation(() => Property)
  async createProperty(
    @GetUser() user: User,
    @Args('createProperty') createProperty: CreatePropertyInput,
  ) {
    return this.housesService.create(user, createProperty);
  }
}
