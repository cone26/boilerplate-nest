import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AbstractEntity } from '@libs/common/database/abstract.entity';
import { User } from '../interfaces/user.interface';

@Entity('User')
export class UserEntity extends AbstractEntity implements User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ comment: '유저 타입', nullable: false })
  userType: number;

  @Column({ comment: '생성 시간', nullable: false })
  createDate: Date;

  @Column({ comment: '탈퇴 요청 시간', nullable: false })
  requestWithdrawalDate: Date;

  @Column({ comment: '언어' })
  language: string;

  @Column({ comment: '디바이스 타입' })
  deviceType: string;

  @Column({ comment: '국가 코드', nullable: false })
  countryCode: string;
}
