import { GetUser, JwtGuard } from '@app/common';
import { UseGuards } from '@nestjs/common';
import { Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { User } from '../entity/user.entity';
import { UsersService } from '../users.service';
@Resolver()
export class UsersResolver {
  // constructor(private usersService: UsersService) {}
  // @UseGuards(JwtGuard)
  // @Query(() => User)
  // getUser(@GetUser() user: User): User {
  //   return { name: user.name, id: user.id, imageUrl: user.imageUrl };
  // }
  // @ResolveReference()
  // async resolveReference(reference: {
  //   __typename: string;
  //   id: number;
  // }): Promise<User> {
  //   return await this.usersService.findById(reference.id);
  //}
}
