import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateAgentDto {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  username: string;
}
