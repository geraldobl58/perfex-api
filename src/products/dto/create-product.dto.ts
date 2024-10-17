import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product title',
    example: 'Laptop',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product description',
    example: 'A laptop for developers',
  })
  description: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product price',
    example: 1000,
  })
  price: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product stock',
    example: 10,
  })
  stock: number;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product items',
    example: 100,
  })
  items: number;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Product status',
    example: true,
  })
  status: boolean;

  @IsString()
  @IsNotEmpty()
  categoryId: string;
}
