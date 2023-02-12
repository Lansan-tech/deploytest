import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ConnectionDto {
  @Field()
  proprtyId: number;
}
