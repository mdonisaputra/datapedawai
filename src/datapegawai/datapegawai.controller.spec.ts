import { Test, TestingModule } from '@nestjs/testing';
import { DatapegawaiController } from './datapegawai.controller';

describe('DatapegawaiController', () => {
  let controller: DatapegawaiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DatapegawaiController],
    }).compile();

    controller = module.get<DatapegawaiController>(DatapegawaiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
