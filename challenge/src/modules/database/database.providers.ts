import { createConnection } from 'typeorm';
import { Country } from '../country/entities/country.entity';
import { Place } from '../place/entities/place.entity';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'challenge',
        password: 'challenge',
        database: 'challenge',
        entities: [Place, Country],
      }),
  },
];
