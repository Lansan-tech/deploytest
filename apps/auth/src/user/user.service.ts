import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { UpdateUser } from './Dtos/update-user.dto';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}
  async updateUserType(user: UpdateUser) {
    try {
      const updatedUser = await this.prismaService.user.update({
        where: {
          email: user.email,
        },
        data: {
          user_type: user.user_type.toUpperCase(),
        },
      });
      return updatedUser;
    } catch (e: any) {
      return e.message;
    }
  }

  async updateUserDetails(user: UpdateUser) {
    try {
      const updatedUser = await this.prismaService.user.update({
        where: {
          email: user.email,
        },
        data: {
          name: user.name,
          email: user.email,
        },
      });
      return updatedUser;
    } catch (e: any) {
      return e.message;
    }
  }

  async getAll() {
    return this.prismaService.user.findMany();
  }
}
