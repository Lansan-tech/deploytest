import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConnectionDto } from './Dtos/wreading-input.dto';

@Injectable()
export class ElectrictyConnectionService {
  constructor(private prismaService: PrismaService) {}
  async electrictyMeters() {
    throw new Error('Method Not Created');
  }

  async createPowerConnection(params: string) {
    throw new Error('Method Not Created');
  }
}
