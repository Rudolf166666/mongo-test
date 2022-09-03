import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InfoController } from '../controller/info.controller';
import { Country, CountrySchema } from '../entity/country.entity';
import { InfoService } from '../service/info.service';
import { InfoDao } from '../dao/info.dao';
import { Info, InfoSchema } from '../entity/info.entity';
import { CountryDao } from '../dao/country.dao';

@Module({
  controllers: [InfoController],
  imports: [
    MongooseModule.forFeature([
      { name: Info.name, schema: InfoSchema },
      { name: Country.name, schema: CountrySchema },
    ]),
  ],
  providers: [InfoDao, InfoService, CountryDao],
  exports: [],
})
export class InfoModule {}
