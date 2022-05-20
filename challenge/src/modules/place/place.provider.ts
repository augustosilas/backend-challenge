import { Connection } from 'typeorm';
import { Place } from './entities/place.entity';

export const placeProviders = [
  {
    provide: 'PLACE_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Place),
    inject: ['DATABASE_CONNECTION'],
  },
];
