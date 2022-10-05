import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class DataPegawai{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    fullname:string;

    @Column()
    email:string;

    @Column()
    address: string;

    @Column()
    phone_number: string;

    @Column()
    status: string;
}