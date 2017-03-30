import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Car } from "./Car";
import { Location } from './Location';

@Entity()
export class Trip {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    startTime: Date;

    @ManyToOne(type => Location)
    startLocation: Location;

    @Column()
    endTime: Date;

    @ManyToOne(type => Location)
    endLocation: Location;

    @Column()
    distance: number;

    @Column()
    duration: number;

    @Column()
    transport: string;

    @ManyToOne(type => Car, { nullable: true })
    car: Car;
}