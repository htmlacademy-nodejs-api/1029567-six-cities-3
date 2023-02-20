import { UserType } from './user-type.enum';

export default class CreateUserWithIdDto {
  public id!: string;

  public name!: string;

  public email!: string;

  public password!: string;

  public userType!: UserType;
}
