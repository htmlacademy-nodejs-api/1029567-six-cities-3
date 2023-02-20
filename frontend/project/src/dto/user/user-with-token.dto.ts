import { UserType } from './user-type.enum';

export default class UserWithTokenDto {
  public name!: string;

  public email!: string;

  public password!: string;

  public userType!: UserType;

  public token!: string;

  public avatarPath!: string;
}
