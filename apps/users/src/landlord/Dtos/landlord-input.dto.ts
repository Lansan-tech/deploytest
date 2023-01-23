import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class RentalUnit {
  @Field()
  @IsString()
  size: string;
  @Field()
  @IsString()
  get uuid(): string {
    return '';
  }
  @Field()
  @IsOptional()
  vacant: boolean;
  @Field()
  @IsNumber()
  is_psuedo: number;
}

@InputType()
export class Property {
  @Field()
  @IsString()
  name: string;
  @Field()
  @IsString()
  location: string;
  @Field(() => [RentalUnit])
  rentalUnits: [RentalUnit];
  @Field()
  get uuid(): string {
    return 'asdjskjdhfkajhsd';
  }
}

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
  @Field(() => Property, {
    description: 'Properrty details for the client',
  })
  @IsOptional()
  property: Property;
  @Field()
  @IsBoolean()
  hasAgent: boolean;
  @Field(() => Agent)
  agent: Agent;
}
