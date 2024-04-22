import { Controller, Get } from '@nestjs/common';
import { ResponseEntity } from '@libs/common/network/response-entity';

@Controller()
export class AdminController {
  constructor() {}

  @Get()
  getHello(): ResponseEntity<unknown> {
    return 'Hello';
    // return ResponseEntity.ok().build();
  }
}
