import { PosterModule } from '@app/common/poster/poster.module';
import {
  ApolloFederationDriverConfig,
  ApolloFederationDriver,
} from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from 'apps/auth/src/strategy/jwt.strategy';
import { InvoicesController } from './invoices.controller';
import { InvoicesService } from './invoices.service';
import { InvoicesResolver } from './resolver/invoices.resolver';

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
    PosterModule,
  ],
  controllers: [InvoicesController],
  providers: [InvoicesService, InvoicesResolver, JwtStrategy],
})
export class InvoicesModule {}
