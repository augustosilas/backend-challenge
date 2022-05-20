import { Module } from '@nestjs/common';
import { CountryModule } from './modules/country/country.module';
import { PlaceModule } from './modules/place/place.module';

@Module({
  imports: [PlaceModule, CountryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
