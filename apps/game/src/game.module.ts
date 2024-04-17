import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { GameServerConfig } from './config/game-server-config';

@Module({
  imports: [GameServerConfig],
  controllers: [GameController],
  providers: [GameService],
})
export class GameModule {}
