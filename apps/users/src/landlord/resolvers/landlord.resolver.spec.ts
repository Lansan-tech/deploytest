import { AgentStub, LandlordMock, PrismaService, UserStub } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { LandlordResolver } from './landlord.resolver';
import { LandlordService } from '../landlord.service';

describe('LandlordResolver', () => {
  let resolver: LandlordResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LandlordResolver, LandlordService, PrismaService],
    }).compile();

    resolver = module.get<LandlordResolver>(LandlordResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  test('Should create Landlord', async () => {
    jest
      .spyOn(resolver, 'createLandlord')
      .mockImplementation(async () => LandlordMock);

    const response = await resolver.createLandlord(UserStub, {
      email: 'landlord@gmail.com',
      imageUrl: 'http://localhost:3000/image.png',
      name: 'Kevin jame',
      paybill: 12123,
      username: 'kevinjames',
    });

    expect(response).toMatchObject({
      name: LandlordMock.name,
    });
  });
});
