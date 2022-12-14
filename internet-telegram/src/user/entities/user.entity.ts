// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require('bcrypt');

import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  BeforeInsert,
} from 'typeorm';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true })
  username: string;

  @Column({
    default: null,
  })
  nickname!: string;

  @Column({
    default: null,
  })
  phone: number;

  @Column({
    default: null,
  })
  email: string;

  @Column({
    default: null,
  })
  avatar: string;

  @Column()
  password: string;

  @Column('simple-enum', {
    enum: ['root', 'author', 'visitor'],
    default: 'root',
  })
  role: string;

  @Column({ type: 'bool', default: true })
  status: boolean;

  @CreateDateColumn({ comment: '创建时间' })
  createTime: string;

  @UpdateDateColumn({ comment: '更新时间' })
  updateTime: string;

  @BeforeInsert()
  async encryptPwd() {
    this.password = await bcrypt.hashSync(this.password, 10);
  }
}
