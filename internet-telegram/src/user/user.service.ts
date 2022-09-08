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
    const { username } = createUserDto;
    const existUser = await this.userEntity.findOne({
      where: { username },
    });
    console.log(existUser);
    if (existUser) {
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
    }
    const newUser = await this.userEntity.create(createUserDto);
    return this.userEntity.save(newUser);
  }
}
