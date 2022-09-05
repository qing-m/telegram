import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly password: string;
}
