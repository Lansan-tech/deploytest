import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class Services {
  name: string;
  description: string;
}
@InputType()
export class RentalUnitInput {
  @Field()
  @IsString()
  size: string;
  @Field()
  @IsString()
  get uid(): string {
    return this.size + 'property';
  }
  @Field()
  @IsNumber()
  is_psuedo: number;
}

@InputType()
export class CreatePropertyInput {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  location: string;
  @Field(() => [RentalUnitInput], { nullable: true })
  rentalUnits: [RentalUnitInput];
  @Field()
  @IsNumber()
  landlord: number;
  @Field()
  uid: string;
}
