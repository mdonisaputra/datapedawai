import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatapegawaiModule } from './datapegawai/datapegawai.module';
import { DataPegawai } from './datapegawai/datapegawai.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'backend',
      database: 'task_management',
      entities: [DataPegawai],
      synchronize: true,
    }),
  DatapegawaiModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
