import { IsString } from 'class-validator';
export class CreateCountryDto {
  @IsString()
  name: string;

  @IsString()
  urlImg: string;
}
