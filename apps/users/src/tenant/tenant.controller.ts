import { RegistrationService } from '@app/common/registration/registration.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { GetUser } from '@app/common/auth/decorator';
import { AuthDto } from '@app/common/auth/dto';
import { JwtGuard } from '@app/common';

@UseGuards(JwtGuard)
@Controller('userRegistration')
export class TenantController {
  constructor(private registrationService: RegistrationService) {}

  @Get('flow/client')
  clientFlow(@GetUser() user: AuthDto) {
    return this.registrationService.tenantRegistrationFlow(user);
  }
  @Get('flow/landlord')
  landlordFlow(@GetUser() user: AuthDto) {
    return this.registrationService.landlordRegistrationFlow(user);
  }

  @Get('flow/property')
  propertyFlow(@GetUser() user: AuthDto) {
    return this.registrationService.propertyRegistrationFlow(user);
  }
}
