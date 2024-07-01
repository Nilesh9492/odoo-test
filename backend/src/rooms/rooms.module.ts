import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { RoomsController } from './rooms.controller';

@Module({
  imports: [TypeOrmModule.forFeature([RoomsEntity])],
  providers: [RoomsService],
  controllers: [RoomsController],
  exports: [TypeOrmModule],
})
export class RoomsModule {}
