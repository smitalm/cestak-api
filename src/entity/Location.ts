import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Trip } from './Trip';

@Entity()
export class Location {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    coordinates: number;

    @Column()
    description: string;

}