import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth')
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_phone: string;

  @Column()
  user_passwrod: string;
}
