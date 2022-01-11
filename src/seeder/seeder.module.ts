import { Module } from '@nestjs/common';
import { DiamondCharacteristicsModule } from 'src/diamond-characteristics/diamond-characteristics.module';
import { DiamondPricingModule } from 'src/diamond-pricing/diamond-pricing.module';
import { DiamondModule } from 'src/diamond/diamond.module';
import { SeederService } from './seeder.service';

@Module({
  imports: [ 
    DiamondCharacteristicsModule,
    DiamondModule,
    DiamondPricingModule
],
  providers: [SeederService]
})
export class SeederModule {}
