import { Controller, Get } from '@nestjs/common';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @Get()
  findAllRooms(): Promise<RoomsEntity[]> {
    return this.roomsService.findAll();
  }
}
