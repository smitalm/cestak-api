import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Trip } from './Trip';

@Entity()
export class Car {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    model: string;

    @Column()
    license: string;

    @Column()
    consumption: number;

    @Column()
    fuel: string;

    @OneToMany(type => Trip, trip => trip.route)
    trips: Trip[];

}