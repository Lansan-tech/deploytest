import { PrismaService } from '@app/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ElectrictyConnectionService } from './electrictyConnections.service';
import { WaterConnectionService } from './waterConnection.service';

describe('ConnectionsService', () => {
  let service: ElectrictyConnectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElectrictyConnectionService,
        PrismaService,
        WaterConnectionService,
      ],
    }).compile();

    service = module.get<ElectrictyConnectionService>(
      ElectrictyConnectionService,
    );
  });

  //Connection are the diffrent connected service to the property
  //We have two types of connection:
  // Water connection and electricty connection.
  test('Should create a new Water connection', () => {
    // jest.spyOn(service, 'waterMeters').mockImplementation(() => ({
    // }))
  });
});
