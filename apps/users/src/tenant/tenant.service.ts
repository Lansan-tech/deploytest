import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { TenantDto } from './Dtos/create-tenant.dto';

@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}

  async create(tenant: TenantDto) {
    try {
      const newClient = await this.prismaService.client.create({
        data: {
          name: tenant.name,
          contact: tenant.contact,
          email: tenant.email,
          quarterly: tenant.quarterly,
          phone: tenant.phoneNo,
          agreement_agreement_clientToclient: {
            create: {
              amount: tenant.agreement.amount,
              valid: 1,
              terminated: tenant.agreement.terminated,
              start_date: tenant.agreement.startDate,
              room_agreement_roomToroom: {
                connect: {
                  uid: tenant.agreement.room.uid,
                },
              },
            },
          },
          balance_initial_balance_initial_clientToclient: {
            create: {
              amount: tenant.balance_initial.amount,
              date: new Date().toDateString(),
            },
          },
          subscription_subscription_clientToclient: {
            create: {
              amount: tenant.subscription.amount,
              service: tenant.subscription.service,
            },
          },
        },
      });
      return newClient;
    } catch (e) {
      return e.message;
    }
  }
}
