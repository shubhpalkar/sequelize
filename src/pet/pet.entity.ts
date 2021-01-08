import { Column, Table } from "sequelize-typescript";
import { Model } from "sequelize/types";

@Table
export class Pet extends Model<Pet> {
    @Column
    type: string

    @Column
    age: number

    @Column
    petCounts: number

}
