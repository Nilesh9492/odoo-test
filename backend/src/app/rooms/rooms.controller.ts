import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { RoomsService } from './rooms.service';
import { SessionGuard } from '../session/SessionGuard';

@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}
  @Post()
  @UseGuards(SessionGuard)
  @UsePipes(ValidationPipe)
  @HttpCode(HttpStatus.OK)
  findAllRooms(@Body() searchDto: any): Promise<RoomsEntity[]> {
    return this.roomsService.searchRooms(searchDto);
  }
}
