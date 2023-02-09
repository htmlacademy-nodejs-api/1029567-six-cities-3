import { OfferType } from './offer-type.enum.js';
import { FacilitiesType } from './offer-facilities.enum.js';
import { User } from './user.type.js';
import { Coordinate } from './coordinate.type.js';
import { OfferCity } from './offer-city.enum.js';

export type Offer = {
  title: string;
  description: string;
  postDate: Date;
  city: OfferCity;
  previewImage: string;
  offerImages: string[];
  isPremium: boolean;
  isFavorites: boolean;
  rating: number;
  type: OfferType;
  roomCount: number;
  guestsCount: number;
  price: number;
  facilities: FacilitiesType[];
  user: User;
  commentCount: number;
  coordinates: Coordinate;
}
