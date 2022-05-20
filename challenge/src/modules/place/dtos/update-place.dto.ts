import { IsString } from 'class-validator';

export class UpdatePlaceDto {
  @IsString()
  countryId?: string;

  @IsString()
  place?: string;

  @IsString()
  mark?: string;
}
