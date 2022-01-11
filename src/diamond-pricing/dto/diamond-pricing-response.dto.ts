import { Clarity } from "src/diamond-characteristics/models/clarity.model";
import { Color } from "src/diamond-characteristics/models/color.model";
import { Shape } from "src/diamond-characteristics/models/shape.model";

export class DiamondPricingResponse {

    carat: number;
    shape: Shape;
    color: Color;
    clarity: Clarity;
    price: number;

    constructor(carat: number, color: Color, shape: Shape, clarity: Clarity, price: number) {
        this.carat = carat;
        this.color = color;
        this.shape = shape;
        this.clarity = clarity;
        this.price = price;
    }

   
}
