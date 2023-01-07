import { Test, TestingModule } from '@nestjs/testing';
import { HousesController } from './houses.controller';
import { HousesService } from './houses.service';

describe('HousesController', () => {
  let housesController: HousesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HousesController],
      providers: [HousesService],
    }).compile();

    housesController = app.get<HousesController>(HousesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(housesController.getHello()).toBe('Hello World!');
    });
  });
});
