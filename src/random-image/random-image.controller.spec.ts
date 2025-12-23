import { Test, TestingModule } from '@nestjs/testing';
import { RandomImageController } from './random-image.controller';

describe('RandomImageController', () => {
  let controller: RandomImageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RandomImageController],
    }).compile();

    controller = module.get<RandomImageController>(RandomImageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
