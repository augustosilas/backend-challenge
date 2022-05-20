import {
  BadRequestException,
  Inject,
  Injectable,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { Place } from './entities/place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @Inject('PLACE_REPOSITORY')
    private readonly placeRepository: Repository<Place>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto) {
    const place = await this.placeRepository.findOne({
      place: createPlaceDto.place,
      mark: createPlaceDto.mark,
    });

    if (place) throw new BadRequestException('Duplicate place');

    return await this.placeRepository.save(createPlaceDto);
  }

  async update(placeId: string, updatePlaceDto: UpdatePlaceDto) {
    return this.placeRepository.save({
      id: placeId,
      ...updatePlaceDto,
      updatedAt: new Date(),
    });
  }

  async findAll() {
    return this.placeRepository.find({
      order: { mark: 'DESC' },
      relations: ['country'],
      select: ['id', 'mark', 'place']
    });
  }

  async delete(placeId: string) {
    await this.placeRepository.delete(placeId);
  }
}
