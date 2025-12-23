import { Module } from '@nestjs/common';
import { RandomImageController } from './random-image.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [RandomImageController]
})
export class RandomImageModule { }
