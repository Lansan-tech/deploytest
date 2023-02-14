import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AgentDto {
  @Field()
  name: string;
  @Field()
  title: string;
  @Field()
  userame: string;
}
