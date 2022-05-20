import { Place } from 'src/modules/place/entities/place.entity';
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('country')
export class Country {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ name: 'url_img' })
  urlImg: string;

  @OneToMany(() => Place, place => place.country)
  @JoinColumn()
  places: Place[]
}
