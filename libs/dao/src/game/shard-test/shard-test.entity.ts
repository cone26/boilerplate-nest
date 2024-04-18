import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ShardTest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: number;
}
