import { OfferType } from '../../../types/offer-type.enum.js';
import { OfferCity } from '../../../types/offer-city.enum.js';
import { FacilitiesType } from '../../../types/offer-facilities.enum.js';
import { Coordinate } from '../../../types/coordinate.type.js';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsInt,
  Max,
  MaxLength,
  Min,
  MinLength,
  IsBoolean,
  IsObject,
  IsNumber
} from 'class-validator';


export default class CreateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum title length must be 20'})
  @MaxLength(1024, {message: 'Maximum title length must be 1024'})
  public description!: string;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public postDate!: Date;

  @IsEnum(OfferCity, {message: '$property should be a value from OfferCity'})
  public city!: OfferCity;

  @IsBoolean({message: 'IsPremium must be an boolean'})
  public isPremium!: boolean;

  @IsBoolean({message: 'IsFavorites must be an boolean'})
  public isFavorites!: boolean;

  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'Only 1 digit precision to the right of decimal point is allowed' })
  @Min(1, {message: 'Minimum rating is 1'})
  @Max(5, {message: 'Maximum rating is 5'})
  public rating!: number;

  @IsEnum(OfferType, {message: '$property should be a value from OfferType'})
  public type!: OfferType;

  @IsInt({message: 'RoomCount must be an integer'})
  @Min(1, {message: 'Minimum roomCount is 1'})
  @Max(8, {message: 'Maximum roomCount is 8'})
  public roomCount!: number;

  @IsInt({message: 'GuestsCount must be an integer'})
  @Min(1, {message: 'Minimum guestsCount is 1'})
  @Max(10, {message: 'Maximum price is 10'})
  public guestsCount!: number;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(100000, {message: 'Maximum price is 100000'})
  public price!: number;

  @IsArray({message: 'Field facilities must be an array'})
  @IsEnum(FacilitiesType,{
    each: true,
    message: '$property should be a value from FacilitiesType'
  })
  public facilities!: FacilitiesType[];

  public userId!: string;

  @IsObject({message: 'coordinates must be an object'})
  public coordinates!: Coordinate;
}
