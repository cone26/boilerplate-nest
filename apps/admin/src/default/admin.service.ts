import { Injectable } from '@nestjs/common';

@Injectable()
export class AdminService {
  health() {
    return { environment: process.env.NODE_ENV };
  }
}
