import { InputType, Field } from '@nestjs/graphql';
import { IsString, IsOptional, IsNumber } from 'class-validator';

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
  @IsString()
  landlordUsername: string;
  @Field()
  @IsString()
  agentUsername: string;
  @Field()
  get uuid(): string {
    return 'asdjskjdhfkajhsd';
  }
}
