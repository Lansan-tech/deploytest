import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { GetUser } from '@app/common';
import { LoginInput } from '../../../../libs/common/src/auth/dto/login-input.dto';
import { JwtGuard } from '@app/common';
import { AccessToken, User } from './entity/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtGuard)
  @Query(() => User)
  getUser(@GetUser() user: User): User {
    return { name: user.name, id: user.id, imageUrl: user.imageUrl };
  }
  @Mutation(() => AccessToken)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.signUp(loginInput);
  }
  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<User> {
    return await this.authService.getUserById(reference.id);
  }
}
