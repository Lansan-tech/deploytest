import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { PosterService } from './poster.service';

describe('PosterService', () => {
  let service: PosterService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PosterService, PrismaService],
    }).compile();

    service = module.get<PosterService>(PosterService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
