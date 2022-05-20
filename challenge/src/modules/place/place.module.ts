import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { PlaceController } from './place.controller';
import { placeProviders } from './place.provider';
import { PlaceService } from './place.service';

@Module({
  imports: [DatabaseModule],
  controllers: [PlaceController],
  providers: [
    ...placeProviders,
    PlaceService
  ],
})
export class PlaceModule {}
