import { IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsString()
  countryId: string;

  @IsString()
  place: string;

  @IsString()
  mark: string;
}
