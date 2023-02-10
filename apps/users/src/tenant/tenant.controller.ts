import { RegistrationService } from '@app/common/registration/registration.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from 'apps/auth/src/decorator';
import { AuthDto } from 'apps/auth/src/dto';
import { JwtGuard } from 'apps/auth/src/guard';
import { TenantService } from './tenant.service';

@UseGuards(JwtGuard)
@Controller('tenant')
export class TenantController {
  constructor(
    private tenantService: TenantService,
    private registrationService: RegistrationService,
  ) {}
  @Get('flow/client')
  clientFlow(@GetUser() user: AuthDto) {
    return this.registrationService.tenantRegistrationFlow(user);
  }
  @Get('flow/landlord')
  landlordFlow(@GetUser() user: AuthDto) {
    return this.registrationService.tenantRegistrationFlow(user);
  }

  @Get('flow/property')
  propertyFlow(@GetUser() user: AuthDto) {
    return this.registrationService.tenantRegistrationFlow(user);
  }
}
