import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { initialRooms } from 'src/constant/initialRooms';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { Repository } from 'typeorm';

// For Initial Rooms data
@Injectable()
export class InitService implements OnModuleInit {
  constructor(
    @InjectRepository(RoomsEntity)
    private roomsRepository: Repository<RoomsEntity>,
  ) {}
  async onModuleInit() {
    const availableRoom = await this.roomsRepository.find();
    if (availableRoom.length === 0) {
      this.roomsRepository.save(initialRooms);
    }
  }
}
