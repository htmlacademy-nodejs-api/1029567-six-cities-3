import { OfferType } from '../types/offer-type.enum.js';
import { Offer } from '../types/offer.type.js';
import { FacilitiesType } from '../types/offer-facilities.enum.js';
import { UserType } from '../types/user-type.enum.js';

export const createOffer = (row: string) => {
  const tokens = row.replace('\n', '').split('\t');
  const [title, description, createdDate, city, previewImage, offerImages, isPremium, isFavorites, rating, type, roomCount, guestsCount, price, facilities, name, email, avatarPath, password, userType,commentCount, latitude, longitude] = tokens;
  return {
    title,
    description,
    postDate: new Date(createdDate),
    city,
    previewImage,
    offerImages: offerImages.split(';'),
    isPremium: Boolean(isPremium),
    isFavorites: Boolean(isFavorites),
    rating: Number.parseInt(rating, 10),
    type: OfferType[type as 'apartment' | 'house' | 'room' | 'hotel'],
    roomCount: Number.parseInt(roomCount, 10),
    guestsCount: Number.parseInt(guestsCount, 10),
    price: Number.parseInt(price, 10),
    facilities: facilities.split(';')
      .map((x) => FacilitiesType[x as 'Breakfast' | 'AirConditioning' | 'LaptopFriendlyWorkspace' | 'BabySeat' | 'Washer' | 'Towels' | 'Fridge']),
    user: { name, email, avatarPath, password, userType: UserType[userType as 'normal' | 'pro'] },
    commentCount: Number.parseInt(commentCount, 10),
    coordinates: {
      latitude: latitude,
      longitude: longitude,
    },
  } as Offer;
};

export const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : '';
