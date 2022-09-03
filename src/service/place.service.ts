import { Injectable } from '@nestjs/common';
import { Place } from '../entity/place.entity';
import { PlaceDao } from '../dao/place.dao';

@Injectable()
export class PlaceService {
  constructor(private readonly placeDao: PlaceDao) {}
  public async insertPlaces(countries: Place[]) {
    await Promise.all(
      countries.map((el) => {
        this.placeDao.insert(el);
      }),
    );
  }
}
