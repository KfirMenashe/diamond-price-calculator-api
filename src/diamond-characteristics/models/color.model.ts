import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Color extends Model {
    @Column
    name: string;
}
