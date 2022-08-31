import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root8888',
      database: 'telegram',
      synchronize: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
