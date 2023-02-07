import { Injectable } from '@nestjs/common';
import { AuthDto } from 'apps/auth/src/dto';
import { clientRegistration } from './Entity/Tenant.entity';

@Injectable()
export class RegistrationService {
  tenantRegistrationFlow(user: AuthDto) {
    console.log(user);
    return clientRegistration;
  }
}
