import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreatePlaceDto } from './dtos/create-place.dto';
import { UpdatePlaceDto } from './dtos/update-place.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  create(@Body() createPlaceDto: CreatePlaceDto) {
    return this.placeService.create(createPlaceDto);
  }

  @Patch('/:placeId')
  update(
    @Param('placeId') placeId: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
  ) {
    return this.placeService.update(placeId, updatePlaceDto);
  }

  @Get()
  findAll() {
    return this.placeService.findAll();
  }

  @Delete('/:placeId')
  async delete(@Param('placeId') placeId: string) {
    await this.placeService.delete(placeId);
  }
}
