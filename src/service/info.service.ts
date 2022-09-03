import { Injectable } from '@nestjs/common';
import { CountryDao } from '../dao/country.dao';
import { InfoDao } from '../dao/info.dao';

@Injectable()
export class InfoService {
  constructor(
    private readonly infoDao: InfoDao,
    private readonly countryDao: CountryDao,
  ) {}

  async insertInfo() {
    const info = await this.countryDao.generateInfo();
    await Promise.all(
      info.map((el) => {
        this.infoDao.insert(el);
      }),
    );
  }
  async getInfo() {
    return this.infoDao.findAll();
  }
}
