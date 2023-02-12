import {
  PageDto,
  PageMetaDto,
  PageOptionsDto,
  PrismaService,
} from '@app/common';
import { Injectable, UseGuards } from '@nestjs/common';
import { JwtGuard } from 'apps/auth/src/guard';
import { UserInputDto } from './Dtos/create-user.dto';

@UseGuards(JwtGuard)
@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}
  async allUsers(pageOptions: PageOptionsDto) {
    try {
      const users = await this.prismaService.user.findMany({
        where: {
          NOT: {
            user_type: 'CLIENT',
          },
        },
      });

      const count = await this.prismaService.user.count();

      const pageMetaDto = new PageMetaDto({
        itemCount: count,
        pageOptionsDto: pageOptions,
      });

      return new PageDto(users, pageMetaDto);
    } catch (e: any) {
      return e.message;
    }
  }

  async createUser(user: UserInputDto) {
    try {
      const newUser = await this.prismaService.user.create({
        data: {
          email: user.email,
          name: user.name,
          imageUrl: user.imageUrl,
          user_type: user.user_type,
        },
      });

      return newUser;
    } catch (e: any) {
      return e.message;
    }
  }
}
