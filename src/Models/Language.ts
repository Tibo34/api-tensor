import { Entity,Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Languages')
export class Language{
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    code:string;
    @Column()
    name:string;
}