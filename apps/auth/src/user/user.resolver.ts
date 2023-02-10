import { PrismaService } from '@app/common';
import { Mutation, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { UpdateUser } from './Dtos/update-user.dto';
import { User } from './Entity/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private prismaService: PrismaService,
    private userService: UserService,
  ) {}

  @ResolveField()
  name() {
    return '';
  }
  //   @Mutation(() => User)
  //   updateUserType(user: UpdateUser) {
  //     return this.userService.updateUserType(user);
  //   }

  //   @Mutation(() => User)
  //   updateUserDetails(user: UpdateUser) {
  //     return this.userService.updateUserDetails(user);
  //   }

  //   @Query(() => [User])
  //   getAllUser() {
  //     return this.userService.getAll();
  //   }
}
