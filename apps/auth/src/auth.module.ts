import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { PrismaModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AuthResolver } from './resolver/auth.resolver';
import { JwtStrategy } from '@app/common';

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
    PrismaModule,
  ],
  providers: [AuthService, JwtStrategy, AuthResolver],
  controllers: [],
})
export class AuthModule {}
