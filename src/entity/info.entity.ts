import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type InfoDocument = Info & Document;

@Schema()
export class Info {
  @Prop()
  _id: string;

  @Prop()
  count: number;

  @Prop({ type: [{ placeName: String, count: Number }] })
  allDiffs: { placeName: string; count: number }[];

  @Prop({
    type: [Number],
  })
  longitude: number[];

  @Prop({
    type: [Number],
  })
  latitude: number[];
}

export const InfoSchema = SchemaFactory.createForClass(Info);
