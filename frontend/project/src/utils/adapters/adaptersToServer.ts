import CreateUserDto from '../../dto/user/create-user.dto';
import CreateOfferDto from '../../dto/offer/create-offer.dto';
import UpdateOfferDto from '../../dto/offer/update-offer.dto';
import CreateCommentDto from '../../dto/comment/create-comment.dto';
import { getTime } from '../utils';
import { UserRegister, CommentPost, NewOffer } from '../../types/types';
import { UserType } from '../../dto/user/user-type.enum';

export const adaptSignupToServer =
  (user: UserRegister): CreateUserDto => ({
    email: user.email,
    name: user.name,
    password: user.password,
    userType: user.type === 'regular' ? UserType.normal : UserType.pro,
  });

export const adaptEditOfferToServer =
  (offer: NewOffer): UpdateOfferDto => ({
    title: offer.title,
    description: offer.description,
    postDate: getTime(),
    city: offer.city.name,
    isPremium: offer.isPremium,
    isFavorites: false,
    rating: 3,
    type: offer.type,
    roomCount: offer.bedrooms,
    guestsCount: offer.maxAdults,
    price: offer.price,
    facilities: offer.goods,
    coordinates: {
      latitude: offer.location.latitude.toString(),
      longitude: offer.location.longitude.toString()
    },
  });

export const adaptCreateOfferToServer =
  (offer: NewOffer): CreateOfferDto => ({
    title: offer.title,
    description: offer.description,
    postDate: getTime(),
    city: offer.city.name,
    isPremium: offer.isPremium,
    isFavorites: false,
    rating: 3,
    type: offer.type,
    roomCount: offer.bedrooms,
    guestsCount: offer.maxAdults,
    price: offer.price,
    facilities: offer.goods,
    coordinates: {
      latitude: offer.location.latitude.toString(),
      longitude: offer.location.longitude.toString()
    },
  });

export const adaptCreateCommentToServer =
  (comment: CommentPost): CreateCommentDto => ({
    text: comment.comment,
    offerId: comment.id,
    rating: comment.rating,
  });

export const adaptAvatarToServer =
  (file: string) => {
    const formData = new FormData();
    formData.set('avatar', file);

    return formData;
  };

export const adaptPreviewImageToServer =
  (file: string) => {
    const formData = new FormData();
    formData.set('previewImage', file);

    return formData;
  };

export const adaptImagesToServer =
  (files: string[]) => {
    const formData = new FormData();

    for(let i = 0; i < files.length; i++){
      formData.append('offerImages', files[i]);
    }
    return formData;
  };
