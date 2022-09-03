import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, model } from 'mongoose';

export type PlaceDocument = Place & Document;

@Schema()
export class Place {
  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  name: string;

  @Prop({
    type: {
      ll: { type: [Number, Number] },
    },
  })
  location: { ll: [number, number] };
  @Prop([{ type: { year: Number, number: Number } }])
  students: { year: number; number: number }[];
}

export const PlaceSchema = SchemaFactory.createForClass(Place);
