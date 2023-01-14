import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { PrismaModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import { AuthResolver } from './resolver/auth.resolver';
import { User } from './resolver/entity/user.entity';
import { UserModule } from './user/user.module';
import { UserResolver } from './user/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: true,
      buildSchemaOptions: {
        orphanedTypes: [User],
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({}),
    PrismaModule,
    UserModule,
  ],
  providers: [AuthService, JwtService, AuthResolver, UserResolver],
  controllers: [],
})
export class AuthModule {}
