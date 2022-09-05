import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty()
  readonly phone: string;

  @IsNotEmpty()
  readonly code: string;

  @IsNotEmpty()
  readonly password: string;
}
