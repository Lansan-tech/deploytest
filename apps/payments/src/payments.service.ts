import { PrismaService } from '@app/common';
import { Injectable } from '@nestjs/common';
import { PaymentDto } from './Dtos/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prismaService: PrismaService) {}
  async create(payment: PaymentDto) {
    try {
      const newPayment = await this.prismaService.payment.create({
        data: {
          date: new Date().toString(),
          ref: payment.ref,
          amount: payment.amount,
          description: payment.description,
          client_payment_clientToclient: {
            connect: {
              name: payment.clientName,
            },
          },
        },
      });

      return newPayment;
    } catch (e) {
      return e.message;
    }
  }

  async retriveAll() {
    try {
      return this.prismaService.payment.findMany({
        include: {
          client_payment_clientToclient: true,
        },
      });
    } catch (e) {
      return e.massage;
    }
  }

  async retriveOne(paymentId: number) {
    try {
      return this.prismaService.payment.findUnique({
        where: {
          payment: paymentId,
        },
      });
    } catch (e) {
      return e.message;
    }
  }
}
