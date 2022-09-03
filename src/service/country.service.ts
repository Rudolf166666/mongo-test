import { Injectable } from '@nestjs/common';
import { CountryDao } from '../dao/country.dao';
import { Country } from '../entity/country.entity';
@Injectable()
export class CountryService {
  constructor(private readonly countryDao: CountryDao) {}
  public async insertCountries(countries: Country[]) {
    await Promise.all(
      countries.map((el) => {
        this.countryDao.insert(el);
      }),
    );
  }
}
