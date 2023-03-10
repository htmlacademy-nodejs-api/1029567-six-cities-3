import { IsMongoId, IsString, Length, IsNumber, Min, Max } from 'class-validator';

export default class CreateCommentDto {
  @IsString({message: 'text is required'})
  @Length(5, 1024, {message: 'Min length is 5, max is 1024'})
  public text!: string;

  @IsMongoId({message: 'offerId field must be a valid id'})
  public offerId!: string;

  public userId!: string;

  @IsNumber({ maxDecimalPlaces: 1 }, { message: 'Only 1 digit precision to the right of decimal point is allowed' })
  @Min(1, { message: 'Minimum rating is 1' })
  @Max(5, { message: 'Maximum rating is 5' })
  public rating!: number;
}
