import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationResolver } from './registration.resolver';
import { JwtStrategy } from '@app/common';

@Module({
  providers: [RegistrationService, RegistrationResolver, JwtStrategy],
})
export class RegistrationModule {}
