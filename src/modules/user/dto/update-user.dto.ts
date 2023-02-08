import { UserType } from '../../../types/user-type.enum.js';

export default class UpdateUserDto {
  public avatarPath?: string;
  public name!: string;
  public userType!: UserType;
}
