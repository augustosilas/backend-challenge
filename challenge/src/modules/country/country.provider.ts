import { Connection } from 'typeorm';
import { Country } from './entities/country.entity';

export const countryProviders = [
  {
    provide: 'COUNTRY_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Country),
    inject: ['DATABASE_CONNECTION'],
  },
];
