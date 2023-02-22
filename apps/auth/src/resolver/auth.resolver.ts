import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { LoginInput } from '../dto/login-input.dto';
import { AccessToken } from '../dto/login-input.dto';

@Resolver(() => AccessToken)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AccessToken)
  login(@Args('loginInput') loginInput: LoginInput) {
    return this.authService.signUp(loginInput);
  }
}
