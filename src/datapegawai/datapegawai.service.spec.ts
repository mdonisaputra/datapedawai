import { Test, TestingModule } from '@nestjs/testing';
import { DatapegawaiService } from './datapegawai.service';

describe('DatapegawaiService', () => {
  let service: DatapegawaiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatapegawaiService],
    }).compile();

    service = module.get<DatapegawaiService>(DatapegawaiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
