import { IsNotEmpty, Length, Validate } from 'class-validator';
import { IsEngAndNumber } from '../../utils/validate';

export class CreateUserDto {
  @IsNotEmpty()
  @Length(1, 10)
  @Validate(IsEngAndNumber, { message: '必须是英文和数字' })
  readonly username: string;

  @IsNotEmpty()
  readonly password: string;
}
