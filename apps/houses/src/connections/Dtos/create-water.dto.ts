import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateWaterDto {
  @Field()
  roomUid: string;
  @Field()
  waterMeterSerialNum: string;
  @Field()
  waterReadingValue: number;
}
