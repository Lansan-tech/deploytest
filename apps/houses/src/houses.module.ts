import { Module } from '@nestjs/common';
import { HousesService } from './houses.service';
import { ConnectionsModule } from './connections/connections.module';
import { JwtStrategy, PrismaModule } from '@app/common';
import { HousesResolver } from './resolver/houses.resolver';
import { ServicesModule } from './services/services.module';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { Roles } from '../../roles/roles';
import { CaslModule } from 'nest-casl';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [],
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
    PrismaModule,
    ConnectionsModule,
    ServicesModule,
  ],
  controllers: [],
  providers: [HousesService, JwtStrategy, HousesResolver],
})
export class HousesModule {}
