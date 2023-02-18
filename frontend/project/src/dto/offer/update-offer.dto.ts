import { OfferType } from './types/offer-type.enum';
import { FacilitiesType } from './types/offer-facilities.enum';
import { Coordinate } from './types/coordinate.type';
import { OfferCity } from './types/offer-city.enum';


export default class UpdateOfferDto {
  public title?: string;

  public description?: string;

  public postDate?: Date;

  public city?: OfferCity;

  public previewImage?: string;

  public offerImages?: string[];

  public isPremium?: boolean;

  public isFavorites?: boolean;

  public rating?: number;

  public type?: OfferType;

  public roomCount?: number;

  public guestsCount?: number;

  public price?: number;

  public facilities?: FacilitiesType[];

  public coordinates?: Coordinate;
}
