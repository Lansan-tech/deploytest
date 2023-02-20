import { Global, Module } from '@nestjs/common';
import { JwtStrategy } from '@app/common';
import { PrismaModule } from '@app/common';
import { RegistrationService } from './registration.service';

@Global()
@Module({
  imports: [PrismaModule],
  providers: [RegistrationService, JwtStrategy],
  exports: [RegistrationService],
})
export class RegistrationModule {}
