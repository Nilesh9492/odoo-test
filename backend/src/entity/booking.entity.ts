import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { SessionEntity } from './session.entity';
import { RoomsEntity } from './rooms.entity';

@Entity()
export class BookingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  features: string;

  @Column()
  capacity: number;

  @Column()
  date: Date;

  @ManyToOne(() => RoomsEntity, (room) => room.booking)
  room: RoomsEntity;

  @OneToMany(() => SessionEntity, (session) => session.room)
  sessions: SessionEntity[];
}
