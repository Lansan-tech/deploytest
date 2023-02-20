import { PrismaService } from '@app/common';
import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import { CreateAgentDto, UpdateAgentDto } from './Dtos';
import { User } from './entity/user.entity';

@Injectable()
export class AgentService {
  constructor(private prismaService: PrismaService) {}
  async getAgentByUser(id: number) {
    try {
      const agent = await this.prismaService.agent.findUnique({
        where: {
          userId: id,
        },
      });

      return agent;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async update(id: number, agent: UpdateAgentDto) {
    try {
      const updatedAgent = await this.prismaService.agent.update({
        where: {
          agent: id,
        },
        data: {
          name: agent.name,
          title: agent.title,
          username: agent.username,
        },
      });

      return updatedAgent;
    } catch (error) {
      throw new BadGatewayException(error.message);
    }
  }
  async create(user: User, agent: CreateAgentDto) {
    console.log(user);
    try {
      const newAgent = await this.prismaService.agent.create({
        data: {
          userId: user.id,
          name: agent.name,
          title: agent.title,
          username: agent.username,
        },
      });

      return newAgent;
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
