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

  async searchRooms(searchDto: any): Promise<RoomsEntity[]> {
    let keyWord: any = searchDto.search.split(/[\s,;]+/);
    let queryType = searchDto.isExact ? '=' : 'RLIKE';
    if (searchDto.search === ' ') {
      return this.roomsRepository.find();
    }
    let queryBuilder = this.roomsRepository
      .createQueryBuilder('rooms')
      .select([
        'rooms.id',
        'rooms.name',
        'rooms.availability',
        'rooms.features',
        'rooms.capacity',
      ]);
    keyWord.forEach((keyword, index) => {
      const condition = `rooms.features ${queryType} :keyword${index}`;
      queryBuilder = queryBuilder.orWhere(condition, {
        [`keyword${index}`]: keyword.trim(),
      });
    });

    const roomsData = await queryBuilder.getMany();
    return roomsData;
  }
}
