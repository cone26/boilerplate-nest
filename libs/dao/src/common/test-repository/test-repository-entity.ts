import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TestRepository {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  test: number;
}
