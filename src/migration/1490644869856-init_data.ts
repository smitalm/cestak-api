import {Connection, EntityManager, MigrationInterface, QueryRunner} from "typeorm";
import { Bill } from '../entity/Bill';

export class init_data1490644869856 implements MigrationInterface {

    public async up(queryRunner: QueryRunner, connection: Connection, entityManager?: EntityManager): Promise<any> {
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
        queryRunner.insert('bill', new Bill({
            price: 10,
            amount: 10,
            fuel: 'benzin',
            timestamp: new Date()
        }));
    }

    public async down(queryRunner: QueryRunner, connection: Connection, entityManager?: EntityManager): Promise<any> {
    }

}
