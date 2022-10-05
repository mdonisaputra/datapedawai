import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { CreateDataPegawaiDto } from './datapegawai.dto';
import { DataPegawaiService } from './datapegawai.service';

@Controller('datapegawai')
export class DataPegawaiController {
    constructor(private DatapegawaiService: DataPegawaiService) {}

@Get()
allData(){
    return this.DatapegawaiService.showAll();
}

@Post()
	membuatRecord(@Body() data: CreateDataPegawaiDto){
	  return this.DatapegawaiService.create(data)
	}

@Put(':id')
    updateDetail(@Param('id') id:string, @Body() data: Partial<CreateDataPegawaiDto>){
        return this.DatapegawaiService.update(id,data);
    }

    @Delete(':id')
    menghapusData(@Param('id') id:string){
        return this.DatapegawaiService.hapusData(id)
    }    
    

}