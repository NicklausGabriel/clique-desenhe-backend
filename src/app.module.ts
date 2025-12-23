import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomImageModule } from './random-image/random-image.module';

@Module({
  imports: [RandomImageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
