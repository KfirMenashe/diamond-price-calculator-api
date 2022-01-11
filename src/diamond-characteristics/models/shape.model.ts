import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Shape extends Model {
    @Column
    name: string;
}
