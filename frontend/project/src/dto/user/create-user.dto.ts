import { UserType } from './user-type.enum';

export default class CreateUserDto {
  public name!: string;

  public email!: string;

  public password!: string;

  public userType!: UserType;
}
