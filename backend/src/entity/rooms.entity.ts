import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { SessionEntity } from './session.entity';
import { BookingEntity } from './booking.entity';

@Entity()
export class RoomsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  availability: string;

  @Column()
  features: string;

  @Column()
  capacity: number;

  @OneToMany(() => SessionEntity, (session) => session.room)
  sessions: SessionEntity[];

  @OneToMany(() => BookingEntity, (booking) => booking.room)
  booking: BookingEntity[];
}
