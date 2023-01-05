import { PrismaService } from '@app/common';
import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entity/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private prismaService: PrismaService) {}

  @Query(() => User)
  me() {
    return { id: 1 };
  }
}
