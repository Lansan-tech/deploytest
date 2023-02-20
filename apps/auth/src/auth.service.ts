import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { PrismaService } from '@app/common';
import { AuthDto } from '../../../libs/common/src/auth/dto';
import { LoginInput } from '../../../libs/common/src/auth/dto/login-input.dto';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwt: JwtService,
    private config: ConfigService,
  ) {}

  async signUp(dto: LoginInput) {
    try {
      //Check if user already exist TODO: Appended needed data to handle the frontend.
      const found = await this.prismaService.user.findUnique({
        where: { email: dto.email },
      });
      //If so return a token if not create and return a token
      if (found) return this.signToken(found.id, found.email);
      //User not found.
      const user = await this.prismaService.user.create({
        data: {
          email: dto.email,
          name: dto.name,
          imageUrl: dto.imageUrl,
        },
      });
      return this.signToken(user.id, user.email);
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw error;
    }
  }
  async signToken(
    userId: number,
    email: string,
  ): Promise<{ access_token: string }> {
    const payload = {
      sub: userId,
      email,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1day',
      secret: secret,
    });

    return {
      access_token: token,
    };
  }
  async getUserById(id: number) {
    return await this.prismaService.user.findUnique({
      where: {
        id: id,
      },
    });
  }
}
