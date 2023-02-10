import { Injectable } from '@nestjs/common';
import { AuthDto } from 'apps/auth/src/dto';
import { landlordRegistration } from './Entity/Landlord.entity';
import { PropertyFlow } from './Entity/Property';
import { clientRegistration } from './Entity/Tenant.entity';

@Injectable()
export class RegistrationService {
  tenantRegistrationFlow(user: AuthDto) {
    return clientRegistration;
  }
  landlordRegistrationFlow(user: AuthDto) {
    return landlordRegistration;
  }

  propertyRegistrationFlow(user: AuthDto) {
    return PropertyFlow;
  }
}
