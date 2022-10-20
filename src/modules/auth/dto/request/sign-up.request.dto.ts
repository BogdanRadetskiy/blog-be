import {
  IsNotEmpty,
  IsEmail,
  MinLength,
  Matches,
  IsOptional,
  IsMobilePhone,
  IsString,
  ValidateIf,
} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

import { minLengthAuthValidation } from '@shared/common/constants';

export class SignUpRequestDto {
  @ApiProperty({ example: 'Blog' })
  @IsNotEmpty()
  readonly name: string;

  @ApiPropertyOptional({ example: '+380673456789' })
  @IsOptional()
  @IsMobilePhone()
  @IsString()
  @ValidateIf((obj, value) => !obj.email || value)
  phone: string;

  @ApiProperty({ example: 'blog@five.com' })
  @IsEmail()
  @IsString()
  @ValidateIf((obj, value) => !obj.phone || value)
  email: string;

  @ApiProperty({ example: 'Five555$$$' })
  @IsNotEmpty()
  @MinLength(minLengthAuthValidation)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![\n.])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  password: string;

  @ApiProperty({ example: 'Five555$$$' })
  @IsNotEmpty()
  @MinLength(minLengthAuthValidation)
  passwordConfirm: string;
}
