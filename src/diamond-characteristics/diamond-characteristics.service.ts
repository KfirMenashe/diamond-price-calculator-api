import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Clarity } from './models/clarity.model';
import { Color } from './models/color.model';
import { Shape } from './models/shape.model';

@Injectable()
export class DiamondCharacteristicsService {

    constructor(
        @InjectModel(Clarity) private clarityModel: typeof Clarity,
        @InjectModel(Color) private colorModel: typeof Color,
        @InjectModel(Shape) private shapeModel: typeof Shape) { }

    async getAllShapes(): Promise<Shape[]> {
        return this.shapeModel.findAll();
    }

    async getShapeById(id: number): Promise<Shape> {
        return this.shapeModel.findOne({ where: { id: id } });
    }

    async getAllColors(): Promise<Color[]> {
        return this.colorModel.findAll();
    }

    async getColorById(id: number): Promise<Color> {
        return this.colorModel.findOne({ where: { id: id } });
    }

    async getAllClarities(): Promise<Clarity[]> {
        return this.clarityModel.findAll();
    }

    async getClarityById(id: number): Promise<Clarity> {
        return this.clarityModel.findOne({ where: { id: id } });
    }

}
