import { UserType } from './user-type.enum';

export default class UserDto {
  public name!: string;

  public email!: string;

  public userType!: UserType;

  public avatarPath!: string;
}
