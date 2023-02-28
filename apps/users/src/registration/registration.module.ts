import { Module } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { RegistrationResolver } from './registration.resolver';

@Module({
  providers: [RegistrationService, RegistrationResolver]
})
export class RegistrationModule {}
