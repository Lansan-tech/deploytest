import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { TenantDto } from './Dtos/create-tenant.dto';
import { ReconcileDto } from './Dtos/recon-account.dto';

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

  retriveAll() {
    return this.prismaService.client.findMany({
      include: {
        agreement_agreement_clientToclient: true,
      },
    });
  }

  retriveOne(clientId: number) {
    return this.prismaService.client.findUnique({
      where: {
        client: clientId,
      },
    });
  }

  async reconcileAccount(reconciliation: ReconcileDto) {
    //check the type either credit or debit.
    switch (reconciliation.type) {
      case 'credit':
        try {
          const credit = await this.prismaService.credit.create({
            data: {
              reason: reconciliation.reason,
              date: new Date().toDateString(),
              amount: reconciliation.amount,
              client_credit_clientToclient: {
                connect: {
                  name: reconciliation.clientName,
                },
              },
            },
          });
          return credit;
        } catch (e) {
          return e.message;
        }
        break;
      case 'debit':
        try {
          const debit = await this.prismaService.debit.create({
            data: {
              reason: reconciliation.reason,
              date: new Date().toDateString(),
              amount: reconciliation.amount,
              client_debit_clientToclient: {
                connect: {
                  name: reconciliation.clientName,
                },
              },
            },
          });
        } catch (e) {
          return e.message;
        }

        break;
      default:
        throw new Error('Sorry, Payment Type Unkown');
    }
  }
}
