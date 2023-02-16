import { Expose } from 'class-transformer';
import { UserType } from '../../../types/user-type.enum.js';

export default class LoggedUserResponse {
  @Expose()
  public token!: string;

  @Expose()
  public email!: string;

  @Expose()
  public avatarPath!: string;

  @Expose()
  public name!: string ;

  @Expose()
  public userType!: UserType;
}
