import { PrismaService } from '@app/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { AgentDto } from './Dtos';
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
  async create(user: User, agent: AgentDto) {
    try {
      const newgent = await this.prismaService.agent.create({
        data: {
          name: agent.name,
          title: agent.title,
          username: agent.userame,
          user: {
            connect: {
              id: user.id,
            },
          },
        },
      });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
