import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { JwtGuard } from '@app/common';
import { PropertyInput } from '../Dtos/create-property.dto';
import { HousesService } from '../houses.service';
import { Property } from '../entity/property.entity';

@UseGuards(JwtGuard)
@Resolver(() => Property)
export class HousesResolver {
  constructor(private housesService: HousesService) {}

  @Mutation(() => Property)
  async createProperty(newProperty: PropertyInput) {
    return this.housesService.create(newProperty);
  }
}
