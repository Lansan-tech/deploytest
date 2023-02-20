import { InputType, PartialType } from '@nestjs/graphql';
import { CreateAgentDto } from './create-agent.dto';

@InputType()
export class UpdateAgentDto extends PartialType(CreateAgentDto) {}
