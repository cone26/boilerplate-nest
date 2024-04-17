import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class AdminServer {
  constructor(private readonly app: INestApplication) {}

  /**
   * initialize server
   */
  async init() {
    this.app.setGlobalPrefix('admin');
    this._initializeSwagger();
  }

  /**
   * execute server
   */
  async run() {
    await this.app.listen(3000);
  }

  /**
   * @private
   * OPEN API(Swagger) 초기화
   */
  private _initializeSwagger(): void {
    const config = new DocumentBuilder()
      .setTitle('Admin Server')
      .setDescription('The Admin API description')
      .setVersion('1.0')
      .build();

    const document = SwaggerModule.createDocument(this.app, config);
    SwaggerModule.setup('admin/api-docs', this.app, document);
  }
}
