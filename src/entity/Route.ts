import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import { Trip } from './Trip';

@Entity()
export class Route {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    startLocation: number;

    @Column()
    startLocationDesc: string;

    @Column()
    endLocation: number;

    @Column()
    endLocationDesc: string;

    @Column()
    distance: number;

    @Column()
    duration: number;

    @Column()
    transport: string;

    @OneToMany(type => Trip, trip => trip.route)
    trips: Trip[];

}