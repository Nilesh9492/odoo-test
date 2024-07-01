import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RoomsController } from './rooms/rooms.controller';
import { RoomsModule } from './rooms/rooms.module';
import { InitService } from './init/init.service';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RoomsModule],
  providers: [InitService],
})
export class AppModule {}
