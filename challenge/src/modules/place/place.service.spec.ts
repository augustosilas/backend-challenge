import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { PlaceService } from './place.service';

const mockPlaceRepository = () => ({
  save: jest.fn(),
  find: jest.fn(),
  findOne: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
});

describe('PlaceService', () => {
  let placeRepository;
  let service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PlaceService,
        {
          provide: 'PLACE_REPOSITORY',
          useFactory: mockPlaceRepository,
        },
      ],
    }).compile();

    placeRepository = await module.get<'PLACE_REPOSITORY'>('PLACE_REPOSITORY');
    service = await module.get<PlaceService>(PlaceService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
    expect(placeRepository).toBeDefined();
  });

  describe('createPlace', () => {
    let mockCreatePlaceDto: CreatePlaceDto;

    beforeEach(() => {
      mockCreatePlaceDto = {
        countryId: 'any_country_id',
        mark: 'any_mark',
        place: 'any_place',
      };
    });

    it('should call save with correct values', async () => {
      placeRepository.save.mockResolvedValue('mockPlace');

      const result = await service.create(mockCreatePlaceDto);
      expect(placeRepository.save).toHaveBeenCalledWith(mockCreatePlaceDto);
      expect(result).toBe('mockPlace');
    });
  });
});
