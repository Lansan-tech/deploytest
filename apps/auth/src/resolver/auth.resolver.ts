import {
  Args,
  Mutation,
  Query,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { LoginInput } from '../dto/login-input.dto';
import { AccessToken, User } from './entity/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User)
  getUser() {
    return { id: 1, posts: [] };
  }
  @Mutation(() => AccessToken)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.signUp(loginInput);
  }
  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.authService.getUserById(reference.id);
  }
}
