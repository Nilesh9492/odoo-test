import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { RoomsEntity } from './rooms.entity';

@Entity()
export class TagsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  tag: string;
}
