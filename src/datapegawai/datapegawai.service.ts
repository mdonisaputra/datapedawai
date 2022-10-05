import { Injectable } from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import { DataPegawaiController } from './datapegawai.controller';
import { DataPegawai } from './datapegawai.entity';
import { CreateDataPegawaiDto} from './datapegawai.dto'

@Injectable()
export class DataPegawaiService {
    constructor(
        @InjectRepository (DataPegawai)
        private DatapegawaiRepository: Repository<DataPegawai>
    ) {}

    async showAll(){
        return await this.DatapegawaiRepository.find();
    }

    async create(data: DataPegawai){
        const datapegawaiNew = await this.DatapegawaiRepository.create(data);
    await this.DatapegawaiRepository.save(datapegawaiNew)
    return datapegawaiNew
     }

     async update(id, data: Partial<CreateDataPegawaiDto>){
        await this.DatapegawaiRepository.update({id}, data); 
        return await this.DatapegawaiRepository.findOne({where:{id}}) 

}

async hapusData(id){
    await this.DatapegawaiRepository.delete({id})
    return {deleted:true} //delete true: menampilkan notif berhasil dihapus
}

 
}
