import {Entity, PrimaryColumn, Column} from "typeorm";

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

}