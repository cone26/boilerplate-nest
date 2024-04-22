import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class GameServer {
  constructor(private readonly app: INestApplication) {}

  /**
   * initialize server
   */
  init(): void {
    this.app.setGlobalPrefix('game');
    this._initializeSwagger();
  }

  /**
   * execute server
   */
  async run(): Promise<void> {
    await this.app.listen(3001);
  }

  /**
   * @private
   * OPEN API(Swagger) 초기화
   */
  private _initializeSwagger(): void {
    const config = new DocumentBuilder()
      .setTitle('Game Server')
      .setDescription('The Game API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('game/api-docs', this.app, document);
  }
}
