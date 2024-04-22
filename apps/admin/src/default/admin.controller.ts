import { Controller, Get } from '@nestjs/common';
import { ResponseEntity } from '@libs/common/network/response-entity';

@Controller()
export class AdminController {
  @Get('health')
  health(): ResponseEntity<unknown> {
    return ResponseEntity.ok().build();
  }
}
