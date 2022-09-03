import { Module } from '@nestjs/common';
import { CountryDao } from '../dao/country.dao';
import { CountryService } from '../service/country.service';
import { CountryController } from '../controller/country.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Country, CountrySchema } from '../entity/country.entity';

@Module({
  controllers: [CountryController],
  imports: [
    MongooseModule.forFeature([{ name: Country.name, schema: CountrySchema }]),
  ],
  providers: [CountryService, CountryDao],
  exports: [],
})
export class CountryModule {}
