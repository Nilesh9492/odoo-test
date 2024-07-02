import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RoomsEntity } from './rooms.entity';

@Entity()
export class SessionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => RoomsEntity, (room) => room.sessions)
  room: RoomsEntity;
}
