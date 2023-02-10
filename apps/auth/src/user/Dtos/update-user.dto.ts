import { Field, InputType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

export enum USERTYPE {
  'AGENT',
  'LANDLORD',
  'CLIENT',
}
@InputType()
export class UpdateUser {
  @Field()
  email: string;
  @Field()
  @IsOptional()
  name: string;
  @Field()
  @IsOptional()
  image: string;
  @Field()
  @IsOptional()
  user_type: string;
}
