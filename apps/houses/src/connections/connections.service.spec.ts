import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ConnectionsService } from './connections.service';

describe('ConnectionsService', () => {
  let service: ConnectionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ConnectionsService, PrismaService],
    }).compile();

    service = module.get<ConnectionsService>(ConnectionsService);
  });

  //Connection are the diffrent connected service to the property
  //We have two types of connection:
  // Water connection and electricty connection.
  test('Should create a new Water connection', () => {
    jest.spyOn(service, 'waterMeters').mockImplementation(() => ({

    }))
  })
});
