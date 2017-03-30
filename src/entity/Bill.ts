import { Entity, PrimaryColumn, Column, ManyToOne } from "typeorm";
import { Location } from './Location';

@Entity()
export class Bill {

    @PrimaryColumn("int", { generated: true })
    id: number;

    @Column()
    price: number;

    @Column()
    amount: number;

    @Column()
    fuel: string;

    @Column()
    timestamp: Date;

    @ManyToOne(type => Location)
    location: Location;

    public constructor(
        fields?: {
            price?: number,
            amount?: number,
            fuel?: string,
            timestamp?: Date
        }) {
        if (fields) Object.assign(this, fields);
    }

}