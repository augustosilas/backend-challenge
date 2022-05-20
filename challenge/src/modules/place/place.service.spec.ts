import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { PlaceService } from './place.service';
import mockDate from 'mockdate';

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

    mockDate.set(new Date());
  });

  afterEach(() => {
    mockDate.reset();
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

    it('should call findOne with correct values', async () => {
      const mockParamFindOne = {
        place: 'any_place',
        countryId: 'any_country_id',
      };
      await service.create(mockCreatePlaceDto);
      expect(placeRepository.findOne).toHaveBeenCalledWith(mockParamFindOne);
    });

    it('should throw BadRequestException if place exists in same country', async () => {
      placeRepository.findOne.mockResolvedValue(mockCreatePlaceDto);
      const result = service.create(mockCreatePlaceDto);
      expect(result).rejects.toThrow(BadRequestException);
    });

    it('should call save with correct values', async () => {
      placeRepository.save.mockResolvedValue('mockPlace');

      const result = await service.create(mockCreatePlaceDto);
      expect(placeRepository.save).toHaveBeenCalledWith(mockCreatePlaceDto);
      expect(result).toBe('mockPlace');
    });

    it('should return values on success', async () => {
      const mockSavePlace = {
        id: 'any_id',
        countryId: 'any_country_id',
        mark: 'any_mark',
        place: 'any_place',
        createdAt: new Date(),
      };
      placeRepository.save.mockResolvedValue(mockSavePlace);

      const result = await service.create(mockCreatePlaceDto);
      expect(result).toBe(mockSavePlace);
    });
  });

  describe('updatePlace', () => {
    let mockUpdatePlaceDto;
    beforeEach(() => {
      mockUpdatePlaceDto = {
        countryId: 'any_country_id',
        mark: 'any_mark',
        place: 'any_place',
      };
    });
    it('should call update with correct values', async () => {
      const placeId = 'any_place_id';
      await service.update(placeId, mockUpdatePlaceDto);
      expect(placeRepository.save).toHaveBeenCalledWith({
        id: placeId,
        ...mockUpdatePlaceDto,
        updatedAt: new Date(),
      });
    });
  });
});
