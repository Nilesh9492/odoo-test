import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';
import { RoomsController } from './app/rooms/rooms.controller';
import { RoomsModule } from './app/rooms/rooms.module';
import { InitService } from './init/init.service';
import { SessionModule } from './app/session/session.module';
import { NextFunction } from 'express';
import { IncomingHttpHeaders } from 'http2';
import { LoggerMiddleware } from './app/utils/middleware';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), RoomsModule, SessionModule],
  providers: [InitService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
