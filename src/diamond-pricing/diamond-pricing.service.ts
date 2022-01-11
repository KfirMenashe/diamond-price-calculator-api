import { Injectable } from '@nestjs/common';
import { DiamondCharacteristicsService } from 'src/diamond-characteristics/diamond-characteristics.service';
import { DiamondPricingResponse } from './dto/diamond-pricing-response.dto';
import { DiamondPricingRequest } from './dto/diamond-pricing-request.dto';
import { PriceCalculator } from './price-calculator';

@Injectable()
export class DiamondPricingService {

    constructor(private diamondCharacteristicsService: DiamondCharacteristicsService) { }

    async getPricing(diamondPricingRequest: DiamondPricingRequest): Promise<DiamondPricingResponse> {
        const carat = diamondPricingRequest.carat;
        const shape = await this.diamondCharacteristicsService.getShapeById(diamondPricingRequest.shapeId);
        const color = await this.diamondCharacteristicsService.getColorById(diamondPricingRequest.colorId);
        const clarity = await this.diamondCharacteristicsService.getClarityById(diamondPricingRequest.clarityId);

        const priceCalculator = new PriceCalculator();
        const price = priceCalculator.calculate(carat, shape.id, color.id, clarity.id);

        return new DiamondPricingResponse(carat, color, shape, clarity, price);
    }

    getPrice(carat: number, shapeId: number, colorId: number, clarityId: number): number {
        const priceCalculator = new PriceCalculator();
        const price = priceCalculator.calculate(carat, shapeId, colorId, clarityId);
        return price;
    }
}
