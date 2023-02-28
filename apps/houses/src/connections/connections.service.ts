import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { ConnectionDto } from './Dtos/wreading-input.dto';

@Injectable()
export class ConnectionsService {
  constructor(private prismaService: PrismaService) {}

  async waterMeters(wConnection: ConnectionDto) {
    try {
      const wMeters = await this.prismaService.query(`
        Select 
            wreading.value, 
            max_date.date, 
            max_date.wmeter 
        From wreading inner join (select max(wreading.date) as date, 
            wreading.wmeter from wreading group by wreading.wmeter) as max_date on wreading.date=max_date.date 
      `);

      return wMeters;
    } catch (error) {
      return error.message;
    }
  }

  async electrictyMeters() {
    try {
      const eMeters = await this.prismaService.query(`
          Select 
              ereading.value, 
              max_date.date, 
              max_date.wmeter 
          From ereading inner join (select max(ereading.date) as date, 
              ereading.wmeter from wreading group by ereading.wmeter) as max_date on ereading.date=max_date.date 
        `);

      return eMeters;
    } catch (error) {
      return error.message;
    }
  }

  async  createWaterConnection(params:type) {
    
  }
}
