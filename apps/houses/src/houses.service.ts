import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { User } from '../../users/src/entity/user.entity';
import { CreatePropertyInput } from './Dtos/create-property.dto';

@Injectable()
export class HousesService {
  constructor(private prismaService: PrismaService) {}
  async create(user: User, newProperty: CreatePropertyInput) {
    try {
      //Find the agnet with matching the current user.
      const agent = await this.prismaService.agent.findUnique({
        where: {
          userId: user.id,
        },
      });
      // Create and link the new property
      const createdProperty = await this.prismaService.property.create({
        data: {
          name: newProperty.name,
          uid: newProperty.uid,
          landlord_property_landlordTolandlord: {
            connect: {
              landlord: newProperty.landlord,
            },
          },
          agent_property_agentToagent: {
            connect: {
              agent: agent.agent,
            },
          },
          room: {
            create: {
              uid: '234B',
            },
          },
        },
        include: {
          room: true,
        },
      });
      console.log(createdProperty);
      return createdProperty;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  private buildRentalUnits(property: CreatePropertyInput): any {
    return property.rentalUnits.map((unit) => ({
      uid: unit.uid,
    }));
  }
}
