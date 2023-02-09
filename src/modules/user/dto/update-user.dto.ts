import { UserType } from '../../../types/user-type.enum.js';
import { IsEnum, IsOptional, IsString, Length } from 'class-validator';

export default class UpdateUserDto {
  @IsOptional()
  @IsString({message: 'avatarPath must be string'})
  public avatarPath!: string;

  @IsString({message: 'name is required'})
  @Length(1, 15, {message: 'Min length name is 1, max is 15'})
  public name!: string;

  @IsEnum(UserType, {message: 'type must be'})
  public userType!: UserType;
}
