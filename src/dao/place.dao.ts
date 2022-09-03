import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from '../entity/place.entity';
import { BaseDao } from './base.dao';

@Injectable()
export class PlaceDao extends BaseDao<Place> {
  constructor(@InjectModel(Place.name) repo: Model<Place>) {
    super(repo);
  }
}
