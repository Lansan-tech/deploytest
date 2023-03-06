import { PartialType } from '@nestjs/graphql';
import { CreateAgentDto } from 'apps/users/src/agent/Dtos';
import { CreateServiceInput } from './create-service.dto';

export class UpdateServiceInput extends PartialType(CreateServiceInput) {}
