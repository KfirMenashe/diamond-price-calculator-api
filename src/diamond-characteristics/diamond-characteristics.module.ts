import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Clarity } from './models/clarity.model';
import { Color } from './models/color.model';
import { Shape } from './models/shape.model';
import { HelpersModule } from 'src/helpers/helpers.module';
import { DiamondCharacteristicsController } from './diamond-characteristics.controller';
import { DiamondCharacteristicsService } from './diamond-characteristics.service';

@Module({
    imports: [
        HelpersModule,
        SequelizeModule.forFeature([Shape, Color, Clarity]),
    ],
    controllers: [DiamondCharacteristicsController],
    providers: [DiamondCharacteristicsService],
    exports:[DiamondCharacteristicsService, SequelizeModule]
})
export class DiamondCharacteristicsModule {}
