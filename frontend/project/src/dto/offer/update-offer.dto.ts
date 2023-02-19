import { Coordinate } from './types/coordinate.type';


export default class UpdateOfferDto {
  public id?: string;

  public title?: string;

  public description?: string;

  public postDate?: string;

  public city?: string;

  public previewImage?: string;

  public offerImages?: string[];

  public isPremium?: boolean;

  public isFavorites?: boolean;

  public rating?: number;

  public type?: string;

  public roomCount?: number;

  public guestsCount?: number;

  public price?: number;

  public facilities?: string[];

  public coordinates?: Coordinate;
}
