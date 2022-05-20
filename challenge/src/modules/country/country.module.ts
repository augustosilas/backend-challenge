import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { CountryController } from './country.controller';
import { countryProviders } from './country.provider';
import { CountryService } from './country.service';

@Module({
  imports: [DatabaseModule],
  controllers: [CountryController],
  providers: [...countryProviders, CountryService],
})
export class CountryModule {}
