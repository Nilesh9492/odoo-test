import { Body, Controller, Get, Post } from '@nestjs/common';
import { SessionService } from './session.service';
import { SessionEntity } from 'src/entity/session.entity';

@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}
  @Post()
  createNewSession(@Body() createSessionDto: any): Promise<SessionEntity> {
    return this.sessionService.createSessionService(createSessionDto);
  }
}
