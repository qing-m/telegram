import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ name: 'IsEngAndNumber', async: false })
export class IsEngAndNumber implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    const reg = new RegExp('^[a-zA-Z0-9]+$');
    return reg.test(text);
  }
}
