import { Body, Controller, Get, Post } from '@nestjs/common';
import { CountryService } from './country.service';
import { CreateCountryDto } from './dtos/create-country.dto';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Post()
  create(@Body() body: CreateCountryDto) {
    return this.countryService.create(body);
  }

  @Get()
  findAll() {
    return this.countryService.findAll();
  }
}
