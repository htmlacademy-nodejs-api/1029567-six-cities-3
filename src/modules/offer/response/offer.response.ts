import { Expose, Type } from 'class-transformer';
import { OfferType } from '../../../types/offer-type.enum.js';
import { FacilitiesType } from '../../../types/offer-facilities.enum.js';
import UserResponse from '../../user/response/user.response.js';
import { Coordinate } from '../../../types/coordinate.type.js';


export default class CreateOfferDto {
  @Expose()
  public title!: string;

  @Expose()
  public description!: string;

  @Expose()
  public postDate!: Date;

  @Expose()
  public city!: string;

  @Expose()
  public previewImage!: string;

  @Expose()
  public offerImages!: string[];

  @Expose()
  public isPremium!: boolean;

  @Expose()
  public isFavorites!: boolean;

  @Expose()
  public rating!: number;

  @Expose()
  public type!: OfferType;

  @Expose()
  public roomCount!: number;

  @Expose()
  public guestsCount!: number;

  @Expose()
  public price!: number;

  @Expose()
  public facilities!: FacilitiesType[];

  @Expose({ name: 'userId'})
  @Type(() => UserResponse)
  public user!: UserResponse;

  @Expose()
  public commentCount!: number;

  @Expose()
  public coordinates!: Coordinate;
}
