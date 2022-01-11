import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';  
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiamondCharacteristicsModule } from './diamond-characteristics/diamond-characteristics.module';
import { DiamondPricingModule } from './diamond-pricing/diamond-pricing.module';
import { HelpersModule } from './helpers/helpers.module';
import { DiamondModule } from './diamond/diamond.module';
import { SeederModule } from './seeder/seeder.module';

@Module({
  imports: [
    DiamondCharacteristicsModule,
    ConfigModule.forRoot(),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3333,
      username: 'root',
      password: 'iLovemysql2@',
      database: 'worthy',
      autoLoadModels: true,
      synchronize: true,
    }),
    DiamondPricingModule,
    HelpersModule,
    DiamondModule,
    SeederModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
