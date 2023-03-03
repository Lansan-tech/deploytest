import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateWaterDto } from './Dtos';
import { ConnectionDto } from './Dtos/wreading-input.dto';

@Injectable()
export class WaterConnectionService {
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

  async createWaterConnection(newConnection: CreateWaterDto) {
    try {
      const waterConnection = await this.prismaService.wconnection.create({
        data: {
          start_date: new Date().toISOString(),
          end_date: new Date().addYears(30).toISOString(),
          room_wconnection_roomToroom: {
            connect: {
              uid: newConnection.roomUid,
            },
          },
          wmeter_wconnection_wmeterTowmeter: {
            create: {
              serial_no: newConnection.waterMeterSerialNum,
              is_supply: 0,
              wreading_wreading_wmeterTowmeter: {
                create: {
                  value: newConnection.waterReadingValue,
                  date: new Date().toISOString(),
                },
              },
            },
          },
        },
        include: {
          water_water_wconnectionTowconnection: true,
          room_wconnection_roomToroom: true,
        },
      });
      return waterConnection;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
