import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameServerConfig } from './config/game-server-config';
import {
  commonTypeOrmOptions,
  gameTypeOrmModuleOptions,
} from '@libs/common/database/typeorm/typeorm-module.options';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GameServerConfig,
    TypeOrmModule.forRoot(commonTypeOrmOptions),
    ...Object.values(gameTypeOrmModuleOptions).map((options) =>
      TypeOrmModule.forRoot(options),
    ),
  ],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
