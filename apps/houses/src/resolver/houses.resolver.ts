import { UseGuards } from '@nestjs/common';
import { Mutation, Resolver } from '@nestjs/graphql';
import { JwtGuard } from 'apps/auth/src/guard';
import { Property } from '../Dtos/create-property.dto';
import { HousesService } from '../houses.service';

@UseGuards(JwtGuard)
@Resolver()
export class HousesResolver {
  constructor(private housesService: HousesService) {}

  @Mutation(() => Property)
  async createProperty(newProperty: Property) {
    return this.housesService.create(newProperty);
  }
}
