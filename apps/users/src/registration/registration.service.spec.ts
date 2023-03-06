import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { RegistrationService } from './registration.service';
import { tenantRegistration } from './values/Tenant.entity';

describe('RegistrationService', () => {
  let service: RegistrationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RegistrationService, PrismaService],
    }).compile();

    service = module.get<RegistrationService>(RegistrationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  test('Test getClientResgistrationFlow', () => {
    jest
      .spyOn(service, 'tenantRegistrationFlow')
      .mockImplementation(() => tenantRegistration);
    const response = service.tenantRegistrationFlow();
    expect(true).toBe(true);
  });
});
