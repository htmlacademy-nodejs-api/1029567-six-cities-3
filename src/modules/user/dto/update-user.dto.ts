import { IsOptional, IsString } from 'class-validator';

export default class UpdateUserDto {
  @IsOptional()
  @IsString({message: 'avatarPath must be string'})
  public avatarPath?: string;
}
