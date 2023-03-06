import { JwtGuard } from '@app/common';
import { UseGuards } from '@nestjs/common';
import { Args, Query, Resolver } from '@nestjs/graphql';
import { Flow } from './entity/flow.entity';
import { RegistrationService } from './registration.service';

UseGuards(JwtGuard);
@Resolver(() => Flow)
export class RegistrationResolver {
  constructor(private registrationService: RegistrationService) {}
  @Query(() => Flow)
  tenantFlow() {
    return this.registrationService.tenantRegistrationFlow();
  }
  @Query(() => Flow)
  landlordFlow() {
    return this.registrationService.landlordRegistrationFlow();
  }

  @Query(() => Flow)
  propertyFlow() {
    return this.registrationService.propertyRegistrationFlow();
  }
}
