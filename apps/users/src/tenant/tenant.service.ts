import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { TenantDto } from './Dtos/create-tenant.dto';
import { ReconcileDto } from './Dtos/recon-account.dto';
import { User } from './entity/user.entiry';

@Injectable()
export class TenantService {
  constructor(private prismaService: PrismaService) {}
  async getClientuser(userId: number) {
    const client = this.prismaService.client.findUnique({
      where: {
        userId: userId,
      },
    });
    return client;
  }
  async create(user: User, tenant: TenantDto) {
    try {
      const newClient = await this.prismaService.client.create({
        data: {
          user: {
            connect: {
              id: user.id,
            },
          },
          title: tenant.title,
          name: tenant.name,
          contact: tenant.contact,
          email: tenant.email,
          quarterly: tenant.quarterly,
          phone: tenant.phoneNo,
          agreement_agreement_clientToclient: {
            create: {
              amount: tenant.agreement.amount,
              valid: 1,
              terminated: new Date(tenant.agreement.terminated),
              start_date: new Date(tenant.agreement.startDate),
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
              date: new Date(),
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
      console.log(newClient);
      return newClient;
    } catch (e) {
      throw new BadRequestException(e.message);
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
          return { success: true, msg: 'Credit creat for account recon' };
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
          return { success: true, msg: 'Debit creat for account recon' };
        } catch (e) {
          return e.message;
        }

        break;
      default:
        throw new Error('Sorry, Payment Type Unkown');
    }
  }
}
