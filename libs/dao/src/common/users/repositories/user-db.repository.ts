import { AbstractRepository } from '@libs/common/database/typeorm/abstract.repository';
import { UserEntity } from '../entities/user.entity';
import { UsersRepository } from '../interfaces/user-repository.interface';
import { CustomRepository } from '@libs/common/database/typeorm/typeorm-ex.decorator';

@CustomRepository(UserEntity)
export class UserDbRepository
  extends AbstractRepository<UserEntity>
  implements UsersRepository {}
