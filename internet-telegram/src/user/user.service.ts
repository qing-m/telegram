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

  async register(createUserDto: CreateUserDto): Promise<CreateUserInterface> {
    const { username } = createUserDto;
    const existUser = await this.userEntity.findOne({
      where: { username },
    });
    if (existUser) {
      throw new HttpException('用户已存在', HttpStatus.BAD_REQUEST);
    }
    const newUser = await this.userEntity.create(createUserDto);
    return this.userEntity.save(newUser);
  }

  async login(createUserDto: CreateUserDto): Promise<CreateUserInterface> {
    const { username, password } = createUserDto;
    const user = await this.userEntity
      .createQueryBuilder('user')
      .addSelect('user.password')
      .where('user.username=:username', { username })
      .getOne();
    if (!user) {
      throw new HttpException('当前用户不存在', HttpStatus.BAD_REQUEST);
    }
    const compareSync = await bcrypt.compareSync(password, user.password);
    if (!compareSync) {
      throw new BadRequestException('密码错误！');
    }
    return user;
  }
}
