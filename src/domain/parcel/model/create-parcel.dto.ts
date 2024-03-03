import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateParcel {
  @IsNotEmpty()
  readonly sku: string;
  @IsNotEmpty()
  readonly description: string;
  @IsNotEmpty()
  readonly streetAddress: string;
  @IsNotEmpty()
  readonly town: string;
  @IsNotEmpty()
  readonly country: string;
  @IsDateString()
  readonly deliveryDate: Date;
}
