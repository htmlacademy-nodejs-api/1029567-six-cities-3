import dayjs from 'dayjs';
import { MockData } from '../../types/mock-data.type.js';
import { OfferType } from '../../types/offer-type.enum.js';
import { generateRandomValue, getRandomItem, getRandomItems } from '../../utils/random.js';
import { OfferGeneratorInterface } from './offer-generator.interface.js';
import { FacilitiesType } from '../../types/offer-facilities.enum';
import { Coordinate } from '../../types/coordinate.type';
import { UserType } from '../../types/user-type.enum';
import {
  MIN_RATING,
  MAX_RATING,
  MIN_ROOM,
  MAX_ROOM,
  MIN_GUESTS,
  MAX_GUESTS,
  MIN_PRICE,
  MAX_PRICE,
  MIN_COMMENT,
  MAX_COMMENT,
  FIRST_WEEK_DAY,
  LAST_WEEK_DAY,
} from '../../utils/consts.js';

export default class OfferGenerator implements OfferGeneratorInterface {
  constructor(private readonly mockData: MockData) {}

  public generate(): string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItem<string>(this.mockData.previewImages);
    const offerImages = getRandomItems<string>(this.mockData.offerImages).join(';');
    const isPremium = getRandomItem<boolean>([true, false]);
    const isFavorites = getRandomItem<boolean>([true, false]);
    const rating = generateRandomValue(MIN_RATING, MAX_RATING);
    const type = getRandomItem([OfferType.apartment, OfferType.house, OfferType.room, OfferType.hotel]);
    const roomCount = generateRandomValue(MIN_ROOM, MAX_ROOM);
    const guestsCount = generateRandomValue(MIN_GUESTS, MAX_GUESTS);
    const price = generateRandomValue(MIN_PRICE, MAX_PRICE);
    const facilities = getRandomItems<string>([
      FacilitiesType.Breakfast, FacilitiesType.AirConditioning,
      FacilitiesType.LaptopFriendlyWorkspace,
      FacilitiesType.BabySeat,
      FacilitiesType.Washer,
      FacilitiesType.Towels,
      FacilitiesType.Fridge
    ]).join(';');
    const name = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatarPath = getRandomItem<string>(this.mockData.avatarPaths);
    const password = getRandomItem<string>(this.mockData.passwords);
    const userType = getRandomItem<string>([UserType.normal, UserType.pro]);
    const commentCount = generateRandomValue(MIN_COMMENT, MAX_COMMENT);
    const coordinates = getRandomItem<Coordinate>(this.mockData.coordinates);
    const postDate = dayjs().subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day').toISOString();

    return [
      title,
      description,
      postDate,
      city,
      previewImage,
      offerImages,
      isPremium,
      isFavorites,
      rating,
      type,
      roomCount,
      guestsCount,
      price,
      facilities,
      name,
      email,
      avatarPath,
      password,
      userType,
      commentCount,
      coordinates.latitude,
      coordinates.longitude,
    ].join('\t');
  }
}
