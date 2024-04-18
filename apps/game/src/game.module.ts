import { Module } from '@nestjs/common';
import { GameServerConfig } from './config/game-server-config';
import { TypeOrmExModule } from '@libs/common/database/typeorm/typeorm-ex.module';
import { gameTypeOrmModuleOptions } from '@libs/common/database/typeorm/typeorm-module.options';
import { GameServer } from './game.server';

@Module({
  imports: [
    GameServerConfig,
    ...Object.values(gameTypeOrmModuleOptions).map((options) =>
      TypeOrmExModule.forRoot(options),
    ),
  ],
  controllers: [],
  providers: [GameServer],
})
export class GameModule {}
