import typegoose, { defaultClasses, getModelForClass, Ref } from '@typegoose/typegoose';
import { OfferType } from '../../types/offer-type.enum.js';
import { UserEntity } from '../user/user.entity.js';
import { FacilitiesType } from '../../types/offer-facilities.enum.js';
import { Coordinate } from '../../types/coordinate.type.js';
import { OfferCity } from '../../types/offer-city.enum.js';

const { prop, modelOptions } = typegoose;

export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({trim: true, required: true})
  public title!: string;

  @prop({trim: true, required: true})
  public description!: string;

  @prop({required: true})
  public postDate!: Date;

  @prop({
    type: () => String,
    enum: OfferCity
  })
  public city!: OfferCity;

  @prop({trim: true, required: true})
  public previewImage!: string;

  @prop({required: true})
  public offerImages!: string[];

  @prop()
  public isPremium!: boolean;

  @prop()
  public isFavorites!: boolean;

  @prop()
  public rating!: number;

  @prop({
    type: () => String,
    enum: OfferType
  })
  public type!: OfferType;

  @prop()
  public roomCount!: number;

  @prop()
  public guestsCount!: number;

  @prop()
  public price!: number;

  @prop({
    type: () => String,
    enum: FacilitiesType
  })
  public facilities!: FacilitiesType[];

  @prop({
    ref: UserEntity,
    required: true
  })
  public userId!: Ref<UserEntity>;

  @prop({default: 0})
  public commentCount!: number;

  @prop()
  public coordinates!: Coordinate;
}

export const OfferModel = getModelForClass(OfferEntity);
