import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Route } from './Route';
import { Car } from "./Car";

@Entity()
export class Trip {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @ManyToOne(type => Route, route => route.trips)
    route: Route;

    @ManyToOne(type => Car, car => car.trips)
    car: Car;
}