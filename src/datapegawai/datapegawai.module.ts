import { Module } from '@nestjs/common';
import { DataPegawaiController } from './datapegawai.controller';
import { DataPegawaiService } from './datapegawai.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import {DataPegawai} from './datapegawai.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataPegawai])],

  controllers: [DataPegawaiController],
  providers: [DataPegawaiService]
})
export class DatapegawaiModule {}
