import { Injectable } from '@nestjs/common';

import { RegisterAuthDto } from './dto/register-auth-dto';
import { RegisterAuthInterface } from './interface/register-auth-interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './entities/auth.entity';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authEntity: Repository<AuthEntity>,
  ) {}
  async register(
    registerAuthDto: RegisterAuthDto,
  ): Promise<RegisterAuthInterface> {
    console.log(registerAuthDto);
    return this.authEntity.save(registerAuthDto);
  }
}
