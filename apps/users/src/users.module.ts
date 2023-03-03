import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { UsersService } from './users.service';
import { TenantModule } from './tenant/tenant.module';
import { LandlordModule } from './landlord/landlord.module';
import { CaretakerModule } from './caretaker/caretaker.module';
import { PrismaModule } from '@app/common';
import { CaslModule } from 'nest-casl';
import { Roles } from '../../roles/roles';
import { JwtStrategy } from '@app/common';
import { AgentModule } from './agent/agent.module';
import { UsersResolver } from './resolver/users.resolver';
import { User } from './entity/user.entity';
import { RegistrationModule } from './registration/registration.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: {
        federation: 2,
      },
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CaslModule.forRoot<Roles>({
      // Role to grant full access, optional
      superuserRole: Roles.admin,
      // Function to get casl user from request
      // Optional, defaults to `(request) => request.user`
      getUserFromRequest: (request) => request.user,
    }),
    JwtModule.register({}),
    TenantModule,
    LandlordModule,
    CaretakerModule,
    PrismaModule,
    AgentModule,
    RegistrationModule,
  ],
  controllers: [],
  providers: [UsersService, JwtStrategy, UsersResolver],
})
export class UsersModule {}
