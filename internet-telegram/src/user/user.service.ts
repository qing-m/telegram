import {
  Injectable,
  HttpException,
  HttpStatus,
  BadRequestException,
} from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';
import { CreateUserInterface } from './interface/create-user-interface';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userEntity: Repository<UserEntity>,
  ) {}

  async register(createUserDto: CreateUserDto) {
    const userExist = await this.userEntity.findOne({
      where: { username: createUserDto.username },
    });
    if (userExist)
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);

    const newUser = await this.userEntity.create(createUserDto);
    const user = await this.userEntity.save(newUser);

    delete newUser.password;
    return user;
  }
}
