import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class RentalUnit {
  @Field()
  uid: string;
  @Field({ nullable: true })
  is_psuedo: number;
}
@ObjectType()
export class Property {
  @Field()
  uid: string;
  @Field()
  name: string;
  @Field({ nullable: true })
  title: string;
  @Field(() => [RentalUnit])
  units: [RentalUnit];
}
