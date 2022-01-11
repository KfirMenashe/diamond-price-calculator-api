import { Column, Model, Table } from "sequelize-typescript";

@Table
export class Clarity extends Model {
    @Column
    name: string;
}
