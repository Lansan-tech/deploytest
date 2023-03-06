import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { UpdateAgentDto } from 'apps/users/src/agent/Dtos';
import { CreateServiceInput } from './dtos/create-service.dto';
import { UpdateServiceInput } from './dtos/update-service.dto';

@Injectable()
export class ServicesService {
  constructor(private prismaService: PrismaService) {}

  async create(service: CreateServiceInput) {
    try {
      const newService = await this.prismaService.service.create({
        data: {
          auto: service.auto,
          name: service.name,
          description: service.description,
          price: service.price,
          property: {
            connect: {
              uid: service.propertyUid,
            },
          },
        },
      });
      return newService;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async update(service: UpdateServiceInput) {
    try {
      const updatedService = await this.prismaService.service.update({
        where: {
          name: service.name,
        },
        data: {
          auto: service.auto,
          description: service.description,
          name: service.name,
          price: service.price,
        },
      });

      return updatedService;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async delete(serviceName: string) {
    try {
      const deletedService = await this.prismaService.service.delete({
        where: {
          name: serviceName,
        },
      });
      return deletedService;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
