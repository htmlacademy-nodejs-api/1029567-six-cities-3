import CommentDto from '../../dto/comment/comment.dto';
import OfferDto from '../../dto/offer/offer.dto';
import UserDto from '../../dto/user/user.dto';
import { City, Comment, Offer, User } from '../../types/types';
import { UserType, CityLocation } from '../../const';

export const adaptCityToClient = (serverCity: string): City => ({
  name: serverCity,
  location: CityLocation[serverCity],
});

export const adaptUserToClient =
  (user: UserDto): User => ({
    name: user.name,
    email: user.email,
    avatarUrl: user.avatarPath,
    type: user.userType === 'normal' ? UserType.Regular : UserType.Pro,
  });

export const adaptOffersToClient =
  (offers: OfferDto[]): Offer[] => offers
    .map((offer: OfferDto) => ({
      id: offer.id,
      price: offer.price,
      rating: offer.rating,
      title: offer.title,
      isPremium: offer.isPremium,
      isFavorite: offer.isFavorites,
      city: adaptCityToClient(offer.city),
      location: CityLocation[offer.city],
      previewImage: offer.previewImage,
      type: offer.type,
      bedrooms: 0,
      description: '',
      goods: [''],
      host: {name: '', type: UserType.Regular, email: '', avatarUrl: ''},
      images: [''],
      maxAdults: 0,
    }));

export const adaptOfferToClient =
  (offer: OfferDto): Offer => ({
    id: offer.id,
    price: offer.price,
    rating: offer.rating,
    title: offer.title,
    isPremium: offer.isPremium,
    isFavorite: offer.isFavorites,
    city: adaptCityToClient(offer.city),
    location: CityLocation[offer.city],
    previewImage: offer.previewImage,
    type: offer.type,
    bedrooms: offer.roomCount,
    description: offer.description,
    goods: offer.facilities,
    host: adaptUserToClient(offer.user),
    images: offer.offerImages,
    maxAdults: offer.guestsCount,
  });

export const adaptCommentsToClient =
  (comments: CommentDto[]): Comment[] =>
    comments
      .filter((comment: CommentDto) =>
        comment.user !== null,
      )
      .map((comment: CommentDto) => ({
        id: comment.id,
        comment: comment.text,
        date: comment.postDate,
        rating: comment.rating,
        user: adaptUserToClient(comment.user),
      }));

export const adaptCommentToClient =
  (comment: CommentDto): Comment => ({
    id: comment.id,
    comment: comment.text,
    date: comment.postDate,
    rating: comment.rating,
    user: adaptUserToClient(comment.user),
  });
