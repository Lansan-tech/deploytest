import { PrismaService } from '@app/common';
import { BadRequestException, Injectable, UseGuards } from '@nestjs/common';
import { JwtGuard } from '@app/common';
import { LandlordDto } from './Dtos/landlord-input.dto';
import { User } from './entity/user.entity';

@UseGuards(JwtGuard)
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

  async create(user: User, landlord: LandlordDto) {
    try {
      //Create a new landlord.
      const newLandlord = await this.prismaService.landlord.create({
        data: {
          name: landlord.name,
          paybill: landlord.paybill,
          userId: user.id,
        },
        include: {
          accounts_accounts_landlordTolandlord: true,
          property_property_landlordTolandlord: true,
        },
      });
      return newLandlord;
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}
