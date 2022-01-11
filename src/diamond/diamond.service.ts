import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Diamond } from './models/diamond.model';

@Injectable()
export class DiamondService {
  constructor(
    @InjectModel(Diamond)
    private diamondModel: typeof Diamond) { }

  async getSimilar(parameters: any): Promise<Diamond[]> {
    return this.diamondModel.findAll({
      where: {
        shapeId: parameters.shapeId,
        colorId: parameters.colorId,
        clarityId: parameters.clarityId
      },
      limit: 4
    });
  }
}
