import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class Value {
  @Field()
  value: string;
  @Field()
  label: string;
}
@ObjectType()
class Option {
  @Field()
  tableName: string;
  @Field(() => [String])
  fields: [string];
  @Field(() => [Value])
  values: [Value];
}

@ObjectType()
class InputField {
  @Field()
  type: string;
  @Field()
  label: string;
  @Field()
  placeholder?: string;
  @Field()
  id: string;
  @Field()
  name: string;
  @Field()
  className?: string;
  @Field(() => Option)
  options?: Option;
}
@ObjectType()
class Defination {
  @Field()
  label: string;
  @Field()
  value: string;
}
@ObjectType()
class Step {
  @Field()
  title: string;
  @Field()
  tableName: string;
  @Field()
  populate?: boolean;
  @Field()
  isMultiple?: boolean;
  @Field(() => InputField)
  fields: [InputField];
  @Field(() => [Defination])
  definations: [Defination];
}

@ObjectType()
export class Flow {
  @Field(() => [Step])
  steps: [Step];
}
