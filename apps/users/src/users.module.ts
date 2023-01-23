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
import { UsersResolver } from './resolver/users.resolver';
import { PrismaModule } from '@app/common';

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
    JwtModule.register({}),
    TenantModule,
    LandlordModule,
    CaretakerModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [UsersService, UsersResolver],
})
export class UsersModule {}
