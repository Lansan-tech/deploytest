import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { LandlordDto } from './Dtos/landlord-input.dto';

@Injectable()
export class LandlordService {
  constructor(private prismaService: PrismaService) {}

  async create(landlord: LandlordDto) {
    //Create a new landlord.
    const newLandlord = await this.prismaService.landlord.create({
      data: {
        name: landlord.name,
        paybill: landlord.paybill,
        username: landlord.username,
        property_property_landlordTolandlord: {
          create: {
            name: landlord.property.name,
            location: landlord.property.location,
            uid: 'sdkfjsfdfsdfgsdf',
            room: {
              create: {
                uid: landlord.property.rentalUnits[0].uuid,
                is_psuedo: 0,
              },
            },
            agent_property_agentToagent: {
              create: {
                name: landlord.agent.name,
                title: landlord.agent.title,
                username: landlord.agent.username,
              },
            },
          },
        },
      },
      include: {
        accounts_accounts_landlordTolandlord: true,
        property_property_landlordTolandlord: true,
      },
    });
    return newLandlord;
  }

  buildProperties(landlord: LandlordDto): any {
    return [];
  }

  buidAgent(landlord: LandlordDto): any {
    return [];
  }
}
