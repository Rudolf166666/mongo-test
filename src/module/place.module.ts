import { Module } from '@nestjs/common';
import { PlaceDao } from '../dao/place.dao';
import { PlaceService } from '../service/place.service';
import { PlaceController } from '../controller/place.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Place, PlaceSchema } from '../entity/place.entity';

@Module({
  controllers: [PlaceController],
  imports: [
    MongooseModule.forFeature([{ name: Place.name, schema: PlaceSchema }]),
  ],
  providers: [PlaceService, PlaceDao],
  exports: [],
})
export class PlaceModule {}
