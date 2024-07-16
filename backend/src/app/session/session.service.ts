import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IncomingHttpHeaders } from 'http2';
import { SessionEntity } from 'src/entity/session.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SessionService {
  constructor(
    @InjectRepository(SessionEntity)
    private sessionRepository: Repository<SessionEntity>,
  ) {}

  async createSessionService(createSessionDto: any): Promise<SessionEntity> {
    const { sessionName } = createSessionDto;

    const existimgSession = await this.sessionRepository.findOne({
      where: { sessionName },
    });
    if (!existimgSession) {
      const session = this.sessionRepository.create({
        sessionName,
      });

      return this.sessionRepository.save(session);
    }
  }
}
