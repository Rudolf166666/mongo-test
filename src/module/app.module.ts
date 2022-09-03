import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DB } from '../config/db.config';
import { CountryModule } from './country.module';
import { InfoModule } from './info.module';
import { PlaceModule } from './place.module';

@Module({
  imports: [
    MongooseModule.forRoot(DB.uri),
    CountryModule,
    PlaceModule,
    InfoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
