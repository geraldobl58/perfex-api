import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  price: number;

  @IsInt()
  @IsNotEmpty()
  stock: number;

  @IsInt()
  @IsNotEmpty()
  items: number;

  @IsBoolean()
  @IsNotEmpty()
  status: string;

  orderId: string;
}
