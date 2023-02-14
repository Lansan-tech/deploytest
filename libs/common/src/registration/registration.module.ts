import { Global, Module } from '@nestjs/common';
import { JwtStrategy } from 'apps/auth/src/strategy/jwt.strategy';
import { PrismaModule } from '../prisma/prisma.module';
import { RegistrationService } from './registration.service';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [RegistrationService, JwtStrategy],
  exports: [RegistrationService],
})
export class RegistrationModule {}
