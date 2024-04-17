import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `./config/.game.env`,
      isGlobal: true,
      load: [],
    }),
  ],
})
export class AdminServerConfig {}
