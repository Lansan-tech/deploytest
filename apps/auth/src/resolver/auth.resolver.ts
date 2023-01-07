import { PrismaService } from '@app/common';
import { Query, Resolver, ResolveReference } from '@nestjs/graphql';
import { AuthService } from '../auth.service';
import { User } from './entity/user.entity';

@Resolver(() => User)
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Query(() => User)
  getUser() {
    return { id: 1 };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.authService.getUserById(reference.id);
  }
}
