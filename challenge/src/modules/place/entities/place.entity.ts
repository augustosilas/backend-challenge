import { Country } from 'src/modules/country/entities/country.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('place')
export class Place {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'country_id' })
  countryId: string;

  @Column()
  place: string;

  @Column()
  mark: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => Country, country => country.places)
  @JoinColumn({ name: 'country_id', referencedColumnName: 'id' })
  country: Country
}
