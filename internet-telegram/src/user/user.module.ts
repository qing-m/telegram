import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UsersController } from './user.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UserService],
})
export class UsersModule {}
