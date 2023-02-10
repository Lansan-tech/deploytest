import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { LandlordDto } from './Dtos/landlord-input.dto';

@Injectable()
export class LandlordService {
  constructor(private prismaService: PrismaService) {}

  //TODO: change landlord to userId
  async getLandlordUser(userId: number) {
    try {
      const landlord = await this.prismaService.landlord.findUnique({
        where: {
          userId: userId,
        },
      });

      return landlord;
    } catch (e: any) {
      return e.message;
    }
  }

  async create(landlord: LandlordDto) {
    //Create a new landlord.
    const newLandlord = await this.prismaService.landlord.create({
      data: {
        name: landlord.name,
        paybill: landlord.paybill,
        username: landlord.username,
      },
      include: {
        accounts_accounts_landlordTolandlord: true,
        property_property_landlordTolandlord: true,
      },
    });
    return newLandlord;
  }
}
