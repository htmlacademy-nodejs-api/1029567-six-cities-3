import { OfferType } from '../../../types/offer-type.enum.js';
import { FacilitiesType } from '../../../types/offer-facilities.enum.js';
import { Coordinate } from '../../../types/coordinate.type.js';


export default class UpdateOfferDto {
  public title?: string;
  public description?: string;
  public postDate?: Date;
  public city?: string;
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
  public commentCount?: number;
  public coordinates?: Coordinate;
}
