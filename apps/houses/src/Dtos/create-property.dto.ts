import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

@InputType()
export class Services {
  name: string;
  description: string;
}
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
  @IsNumber()
  landlord: number;
  @Field()
  @IsNumber()
  agent: number;
  @Field()
  @IsString()
  agentUsername: string;
  @Field()
  get uuid(): string {
    return 'asdjskjdhfkajhsd';
  }
}
