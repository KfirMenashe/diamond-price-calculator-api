import { BelongsTo, Column, ForeignKey, Model, Table } from "sequelize-typescript";
import { Clarity } from "src/diamond-characteristics/models/clarity.model";
import { Color } from "src/diamond-characteristics/models/color.model";
import { Shape } from "src/diamond-characteristics/models/shape.model";

@Table
export class Diamond extends Model {

    @Column
    carat: number;

    @Column
    @ForeignKey(() => Shape)
    shapeId: number;

    @BelongsTo(() => Shape)
    shape: Shape

    @Column
    @ForeignKey(() => Color)
    colorId: number;

    @BelongsTo(() => Color)
    color: Color

    @Column
    @ForeignKey(() => Clarity)
    clarityId: number;

    @BelongsTo(() => Clarity)
    clarity: Clarity;

    @Column
    imageUrl: string;

    @Column
    price: number;
}
