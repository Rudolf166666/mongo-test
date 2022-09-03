import { Controller, HttpStatus, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { CountryService } from '../service/country.service';
import { Country } from '../entity/country.entity';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}
  @Post()
  async injectCountries(@Res() res: Response) {
    const countries: Country[] = JSON.parse(
      readFileSync(process.cwd() + '/src/json/second.json', 'utf-8'),
    );
    await this.countryService.insertCountries(countries);
    return res.status(HttpStatus.CREATED).send({ message: 'Success' });
  }
}
