import { Clarity } from "../models/clarity.model";
import { Color } from "../models/color.model";
import { Shape } from "../models/shape.model";

export class DiamondCharacteristicsResponse {
    shapes: Shape[];
    colors: Color[];
    clarities: Clarity[];

    constructor(shapes: Shape[], colors: Color[], clarities: Clarity[]) {
        this.shapes = shapes;
        this.colors = colors;
        this.clarities = clarities;
    }
}
