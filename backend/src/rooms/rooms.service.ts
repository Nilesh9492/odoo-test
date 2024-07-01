import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RoomsEntity } from 'src/entity/rooms.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(RoomsEntity)
    private roomsRepository: Repository<RoomsEntity>,
  ) {}

  findAll(): Promise<RoomsEntity[]> {
    return this.roomsRepository.find();
  }
}
