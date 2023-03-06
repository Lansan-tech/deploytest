import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ServicesService } from './services.service';

describe('ServicesService', () => {
  let service: ServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ServicesService, PrismaService],
    }).compile();

    service = module.get<ServicesService>(ServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('Should Create  anew Service', async () => {
    jest.spyOn(service, 'create').mockImplementation(async () => ({
      auto: 1,
      description: '',
      name: 'Test Service',
      price: 399,
      property_id: 3,
      service: 1,
    }));

    const response = await service.create({
      auto: 1,
      description: '',
      name: '',
      price: 399,
      propertyUid: 'sljdlsj',
    });

    expect(response).toMatchObject({
      name: 'Test Service',
    });
  });
});
