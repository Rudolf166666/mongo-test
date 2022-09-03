import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Place } from '../entity/place.entity';
import { Country } from '../entity/country.entity';
import { Info } from 'src/entity/info.entity';
import { BaseDao } from './base.dao';
@Injectable()
export class CountryDao extends BaseDao<Country> {
  constructor(@InjectModel(Country.name) repo: Model<Country>) {
    super(repo);
  }
  async generateInfo() {
    const info: Info[] = await this.repo.aggregate([
      {
        $lookup: {
          from: 'places',
          let: { name: '$country' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$name', '$country'],
                },
              },
            },
            {
              $project: {
                _id: 0,
                longitude: { $arrayElemAt: ['$location.ll', 0] },
              },
            },
          ],
          as: 'longitude',
        },
      },
      { $addFields: { longitude: '$longitude.longitude' } },
      {
        $lookup: {
          from: 'places',
          let: { name: '$country' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$name', '$country'],
                },
              },
            },
            {
              $project: {
                _id: 0,
                latitude: { $arrayElemAt: ['$location.ll', 1] },
              },
            },
          ],
          as: 'latitude',
        },
      },
      { $addFields: { latitude: '$latitude.latitude' } },
      {
        $lookup: {
          from: 'places',
          let: { name: '$country', count: '$overallStudents' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$name', '$country'],
                },
              },
            },
            {
              $project: {
                _id: 0,
                placeName: '$name',
                count: {
                  $subtract: [{ $sum: '$students.number' }, '$$count'],
                },
              },
            },
          ],
          as: 'allDiffs',
        },
      },
      {
        $lookup: {
          from: 'places',
          let: { name: '$country', count: '$overallStudents' },
          pipeline: [
            {
              $match: {
                $expr: {
                  $eq: ['$$name', '$country'],
                },
              },
            },
            { $count: 'count' },
          ],
          as: 'count',
        },
      },
      {
        $project: {
          _id: '$country',
          allDiffs: '$allDiffs',
          count: { $arrayElemAt: ['$count.count', 0] },
          longitude: '$longitude',
          latitude: '$latitude',
        },
      },
    ]);
    return info;
  }
}
