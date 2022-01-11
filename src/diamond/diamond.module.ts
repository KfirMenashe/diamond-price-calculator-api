import { Module } from '@nestjs/common';
import { DiamondService } from './diamond.service';
import { DiamondController } from './diamond.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Diamond } from './models/diamond.model';

@Module({
  imports: [SequelizeModule.forFeature([Diamond])],
  controllers: [DiamondController],
  providers: [DiamondService],
  exports:[SequelizeModule]
})
export class DiamondModule {}
