// import { OfferType } from './types/offer-type.enum';
// import { FacilitiesType } from './types/offer-facilities.enum';
import { Coordinate } from './types/coordinate.type';
// import { OfferCity } from './types/offer-city.enum';


export default class CreateOfferDto {
  public title!: string;

  public description!: string;

  public postDate!: string;

  public city!: string;

  public isPremium!: boolean;

  public rating!: number;

  public type!: string;

  public roomCount!: number;

  public guestsCount!: number;

  public price!: number;

  public facilities!: string[];

  public coordinates!: Coordinate;
}
