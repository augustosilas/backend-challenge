import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCountryDto } from './dtos/create-country.dto';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(
    @Inject('COUNTRY_REPOSITORY')
    private readonly countryRepository: Repository<Country>,
  ) {}

  async create(createCountryDto: CreateCountryDto) {
    return this.countryRepository.save(createCountryDto);
  }

  async findAll() {
    return this.countryRepository.find({ select: ['id', 'name'] });
  }

  async delete(countryId: string) {
    await this.countryRepository.delete(countryId);
  }
}
