import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { Property } from './Dtos/create-property.dto';

@Injectable()
export class HousesService {
  constructor(private prismaService: PrismaService) {}
  async create(newProperty: Property) {
    const createdProperty = await this.prismaService.property.create({
      data: {
        name: newProperty.name,
        uid: newProperty.uuid,
        landlord_property_landlordTolandlord: {
          connect: {
            username: newProperty.landlordUsername,
          },
        },
        agent_property_agentToagent: {
          connect: {
            username: newProperty.agentUsername,
          },
        },
        room: {
          create: this.buildRentalUnits(newProperty),
        },
      },
    });
  }

  buildRentalUnits(property: Property): any {
    return property.rentalUnits;
  }
}
