import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { Property } from './Dtos/create-property.dto';

@Injectable()
export class HousesService {
  constructor(private prismaService: PrismaService) {}
  async create(newProperty: Property) {
    try {
      const createdProperty = await this.prismaService.property.create({
        data: {
          name: newProperty.name,
          uid: newProperty.uuid,
          landlord_property_landlordTolandlord: {
            connect: {
              landlord: newProperty.landlord,
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

      return createdProperty;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  private buildRentalUnits(property: Property): any {
    return property.rentalUnits;
  }
}
