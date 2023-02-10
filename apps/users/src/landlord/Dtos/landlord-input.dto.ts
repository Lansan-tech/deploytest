import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class Agent {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  username: string;
  @Field()
  title: string;
}

@InputType()
export class LandlordDto {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  username: string;
  @Field()
  paybill: number;
  @Field()
  @IsBoolean()
  hasAgent: boolean;
  @Field(() => Agent)
  agent: Agent;
}
