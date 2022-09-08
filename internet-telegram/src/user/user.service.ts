import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInterface } from './interface/create-user-interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  async register(createUserDto: CreateUserDto): Promise<CreateUserInterface> {
    return this.userEntity.save(createUserDto);
  }
}
