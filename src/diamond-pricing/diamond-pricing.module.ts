import { Module } from '@nestjs/common';
import { DiamondPricingService } from './diamond-pricing.service';
import { DiamondPricingController } from './diamond-pricing.controller';
import { HelpersModule } from 'src/helpers/helpers.module';
import { DiamondCharacteristicsModule } from 'src/diamond-characteristics/diamond-characteristics.module';

@Module({
  imports: [HelpersModule, DiamondCharacteristicsModule],
  providers: [DiamondPricingService],
  controllers: [DiamondPricingController],
  exports: [DiamondPricingService]

})
export class DiamondPricingModule { }
