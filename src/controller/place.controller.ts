import { Controller, HttpStatus, Req, Res, Post } from '@nestjs/common';
import { Response } from 'express';
import { readFileSync } from 'fs';
import { Place } from '../entity/place.entity';
import { PlaceService } from '../service/place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}
  @Post()
  async injectCountries(@Res() res: Response) {
    const places: Place[] = JSON.parse(
      readFileSync(process.cwd() + '/src/json/first.json', 'utf-8'),
    );
    await this.placeService.insertPlaces(places);
    return res.status(HttpStatus.CREATED).send({ message: 'Success' });
  }
}
