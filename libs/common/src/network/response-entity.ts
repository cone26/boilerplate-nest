import { ApiProperty } from '@nestjs/swagger';

export class Response {
  @ApiProperty({ example: 0 })
  private readonly code: number;

  @ApiProperty({ example: {}, required: false })
  private readonly data?: any | any[];

  @ApiProperty({ example: {}, required: false })
  private readonly payload?: any | any[];

  @ApiProperty({ example: '', required: false })
  private readonly message?: string;

  constructor(
    code: number,
    data: any | any[],
    payload: any | any[],
    message: string,
  ) {
    this.code = code;
    this.data = data;
    this.payload = payload;
    this.message = message;
  }
}

export class ResponseEntity<T> {
  @ApiProperty({ example: 0 })
  private code: number;

  @ApiProperty({ required: false })
  private data: T | T[];

  @ApiProperty({ example: {}, required: false })
  private payload?: object;

  @ApiProperty({ example: '', required: false })
  private message?: string;

  public ok(): ResponseEntity<T> {
    this.code = 0;
    return this;
  }

  public error(code = 999, message = 'Error'): ResponseEntity<T> {
    this.code = code;
    this.message = message;
    return this;
  }

  public body(data: T | T[]): ResponseEntity<T> {
    this.data = data;
    return this;
  }

  build(): Response {
    return new Response(this.code, this.data, this.payload, this.message);
  }
}
