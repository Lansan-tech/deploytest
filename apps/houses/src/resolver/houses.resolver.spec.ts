import { AgentStub, PrismaService, PropertyStub, UserStub } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { HousesService } from '../houses.service';
import { HousesResolver } from './houses.resolver';

describe('HousesResolver', () => {
  let resolver: HousesResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HousesResolver, HousesService, PrismaService],
    }).compile();

    resolver = module.get<HousesResolver>(HousesResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  test('Create  new proerty', async () => {
    jest.spyOn(resolver, 'createProperty').mockImplementation(async () => ({
      uid: '234B',
      property: 1,
      agent: 1,
      caretaker: null,
      landlord: 1,
      location: 'Donhome',
      name: 'Savanah Estate',
      rental_unit: 2,
      units: [
        {
          property_id: 1,
          is_psuedo: 0,
          room: 1,
          title: '',
          uid: '',
        },
      ],
    }));

    const response = await resolver.createProperty(UserStub, {
      landlord: 2,
      uid: PropertyStub.name + PropertyStub.location,
      location: PropertyStub.location,
      name: PropertyStub.name,
      rentalUnits: [
        {
          size: PropertyStub.rentalUnits[0].size,
          uid: PropertyStub.rentalUnits[0].uid,
          is_psuedo: 0,
        },
      ],
    });

    expect(response).toMatchObject({
      name: 'Savanah Estate',
    });
  });
});
