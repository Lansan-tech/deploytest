import { RegistrationService } from '@app/common/registration/registration.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '@app/common/auth/decorator';
import { AuthDto } from 'apps/auth/src/dto';
import { JwtGuard } from '@app/common';

@UseGuards(JwtGuard)
@Controller('userRegistration')
export class TenantController {
  constructor(private registrationService: RegistrationService) {}

  @Get('flow/client')
  clientFlow(@GetUser() user: AuthDto) {
    return this.registrationService.tenantRegistrationFlow();
  }
  @Get('flow/landlord')
  landlordFlow(@GetUser() user: AuthDto) {
    return this.registrationService.landlordRegistrationFlow();
  }

  @Get('flow/property')
  propertyFlow(@GetUser() user: AuthDto) {
    return this.registrationService.propertyRegistrationFlow();
  }
}
