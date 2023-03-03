import {
  AgentStub,
  LandlordMock,
  LandlordStub,
  PrismaService,
} from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LandlordService } from './landlord.service';

describe('LandlordService', () => {
  let service: LandlordService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandlordService, PrismaService],
    }).compile();

    service = module.get<LandlordService>(LandlordService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('Service should create new landlord', async () => {
    jest.spyOn(service, 'create').mockImplementation(async () => LandlordMock);

    const response = await service.create({
      ...LandlordStub,
    });

    expect(response).toMatchObject({
      name: LandlordMock.name,
    });
  });
});
