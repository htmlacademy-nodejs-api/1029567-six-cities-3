import { IsEmail, IsEnum, IsString, Length, IsOptional, MaxLength } from 'class-validator';
import { UserType } from '../../../types/user-type.enum.js';

export default class CreateUserDto {
  @IsString({message: 'name is required'})
  @Length(1, 15, {message: 'Min length name is 1, max is 15'})
  public name!: string;

  @IsEmail({}, {message: 'email must be valid address'})
  public email!: string;

  @IsOptional()
  @MaxLength(256, { message: 'Too short for field «image»' })
  @IsString({message: 'avatarPath must be string'})
  public avatarPath!: string;

  @IsString({message: 'password is required'})
  @Length(6, 12, {message: 'Min length for password is 6, max is 12'})
  public password!: string;

  @IsEnum(UserType, {message: 'type must be'})
  public userType!: UserType;
}
