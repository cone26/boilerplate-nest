import { Controller, Get } from '@nestjs/common';
import { ResponseEntity } from '@libs/common/network/response-entity';
import { ApiResponseEntity } from '@libs/common/decorator/api-response-entity';

@Controller()
export class AdminController {
  @Get('health')
  @ApiResponseEntity({ summary: 'health check' })
  health(): ResponseEntity<unknown> {
    return ResponseEntity.ok().build();
  }
}
