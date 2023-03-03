import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class WaterMeter {
  @Field()
  serial_no: number;
}
@ObjectType()
export class WaterConnection {
  @Field()
  start_date: string;
  @Field()
  end_date: string;
  @Field()
  start_reading: number;
  @Field()
  wmeter: WaterMeter;
}
