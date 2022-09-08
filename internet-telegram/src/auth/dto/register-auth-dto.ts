import { IsNotEmpty, IsNumber } from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty({ message: 'name不能为空' })
  readonly name: string;

  @IsNotEmpty({ message: 'phone不能为空' })
  @IsNumber()
  readonly phone: number;

  @IsNotEmpty({ message: 'code不能为空' })
  @IsNumber()
  readonly code: number;
}
