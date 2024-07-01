import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

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
}
