import { Body, Controller, Post } from '@nestjs/common';
import { SleepService } from 'src/helpers/sleep.service';
import { DiamondPricingResponse } from './dto/diamond-pricing-response.dto';
import { DiamondPricingRequest } from './dto/diamond-pricing-request.dto';
import { DiamondPricingService } from './diamond-pricing.service';

@Controller('diamond-pricing')
export class DiamondPricingController {

    constructor(
        private diamondPricingService: DiamondPricingService,
        private sleepService: SleepService) { }


    @Post()
    async getPricing(@Body() diamondPricingRequest: DiamondPricingRequest): Promise<DiamondPricingResponse> {

        const pricing = await this.diamondPricingService.getPricing(diamondPricingRequest);
        
        // this is here just to mimic some time consuming operation
        await this.sleepService.sleepSeconds(0.5);
        
        return pricing;
    }
}
