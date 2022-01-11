import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { Transaction } from 'sequelize/types';
import { Clarity } from 'src/diamond-characteristics/models/clarity.model';
import { Color } from 'src/diamond-characteristics/models/color.model';
import { Shape } from 'src/diamond-characteristics/models/shape.model';
import { DiamondPricingService } from 'src/diamond-pricing/diamond-pricing.service';
import { DiamondPricingRequest } from 'src/diamond-pricing/dto/diamond-pricing-request.dto';
import { Diamond } from 'src/diamond/models/diamond.model';


@Injectable()
export class SeederService {

    constructor(
        private sequelize: Sequelize,
        @InjectModel(Shape) private shapeModel: typeof Shape,
        @InjectModel(Color) private colorModel: typeof Color,
        @InjectModel(Clarity) private clarityModel: typeof Clarity,
        @InjectModel(Diamond) private diamondModel: typeof Diamond,
        private diamondPricingService: DiamondPricingService) { }

    async seed() {
        const shapes = require('./seed-data/shapes.json') as Shape[];
        const colors = require('./seed-data/colors.json') as Color[];
        const clarities = require('./seed-data/clarities.json') as Clarity[];

        // has to go with 'raw' here as SET FOREIGN_KEY_CHECKS does not have built-in support   
        let transaction: Transaction;
        try {
            transaction = await this.sequelize.transaction();
            const options = { raw: true, transaction };
            await this.sequelize.query('SET FOREIGN_KEY_CHECKS = 0', options);
            await this.sequelize.query('truncate table Diamonds', options);
            await this.sequelize.query('truncate table Shapes', options);
            await this.sequelize.query('truncate table Colors', options);
            await this.sequelize.query('truncate table Clarities', options);
            await this.sequelize.query('SET FOREIGN_KEY_CHECKS = 1', options);
            await transaction.commit();
        } catch {
            await transaction.rollback()
        }

        const createdShapes = await this.shapeModel.bulkCreate(shapes);
        const createdColors = await this.colorModel.bulkCreate(colors);
        const createdClarities = await this.clarityModel.bulkCreate(clarities);

        // generate dummy diamonds
        const randomDiamonds: any[] = [];
        for (let i = 0; i < 5000; i++) {
            const carat = i + 1;
            const shapeId = createdShapes[Math.floor(Math.random() * createdShapes.length)].id;
            const colorId = createdColors[Math.floor(Math.random() * createdColors.length)].id;
            const clarityId = createdClarities[Math.floor(Math.random() * createdClarities.length)].id;
            const imageUrl = `https://via.placeholder.com/200x200.png?text=Beautiful+Diamond+${i + 1}`;

            const diamond = {
                carat,
                shapeId,
                colorId,
                clarityId,
                imageUrl,
                price: this.diamondPricingService.getPrice(carat, shapeId, colorId, clarityId)
            };

            randomDiamonds.push(diamond);
        }

        await this.diamondModel.bulkCreate(randomDiamonds);
    }

}
