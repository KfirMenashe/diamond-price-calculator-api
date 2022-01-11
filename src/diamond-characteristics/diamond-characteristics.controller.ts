import { Controller, Get } from '@nestjs/common';
import { SleepService } from 'src/helpers/sleep.service';
import { DiamondCharacteristicsService } from './diamond-characteristics.service';
import { DiamondCharacteristicsResponse } from './dto/diamond-characteristics-response.dto';

@Controller('diamond-characteristics')
export class DiamondCharacteristicsController{

    constructor(
        private diamondCharacteristicsService: DiamondCharacteristicsService,
        private sleepService: SleepService) { }

    @Get()
    async getAllCharacteristics(): Promise<DiamondCharacteristicsResponse> {
        const shapes = await this.diamondCharacteristicsService.getAllShapes();
        const colors = await this.diamondCharacteristicsService.getAllColors();
        const clarities = await this.diamondCharacteristicsService.getAllClarities();
        
        // this is here just to mimic some time consuming operation
        await this.sleepService.sleepSeconds(0.5);

        return new DiamondCharacteristicsResponse(shapes, colors, clarities);
    }
}
