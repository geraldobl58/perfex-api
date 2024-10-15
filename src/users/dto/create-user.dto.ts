import {
  IsBoolean,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  phone: string;

  @IsBoolean()
  isAdmin: boolean;
}
