import { Controller, Get, Query } from '@nestjs/common';
import { Diamond } from './models/diamond.model';
import { DiamondService } from './diamond.service';

@Controller('diamond')
export class DiamondController {
  constructor(private readonly diamondService: DiamondService) { }

  @Get('similar')
  async getSimilar(@Query() parameters): Promise<Diamond[]> {
    const similarDiamonds = this.diamondService.getSimilar(parameters);
    return similarDiamonds;
  }

}
