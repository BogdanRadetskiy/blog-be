import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class SignInRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  readonly emailOrPhone: string;

  @ApiProperty()
  @IsNotEmpty()
  readonly password: string;
}
