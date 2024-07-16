import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { SessionEntity } from 'src/entity/session.entity';
import { SessionService } from './session.service';
import { SessionController } from './session.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SessionEntity])],
  providers: [SessionService],
  controllers: [SessionController],
  exports: [TypeOrmModule],
})
export class SessionModule {}
