import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Info } from '../entity/info.entity';
import { BaseDao } from './base.dao';

@Injectable()
export class InfoDao extends BaseDao<Info> {
  constructor(@InjectModel(Info.name) repo: Model<Info>) {
    super(repo);
  }
}
