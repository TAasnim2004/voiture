
import { Controller, Post, Get, Body, Param, ParseIntPipe } from '@nestjs/common';
import { VoitureService } from './voiture.service';

@Controller('voitures')
export class VoitureController {

  constructor(private voitureService: VoitureService) {}

  // API 1 : Ajouter
  @Post()
  ajouter(@Body() data: any) {
    return this.voitureService.ajouter(data);
  }

  // API 2 : ALL
  @Get()
  findAll() {
    return this.voitureService.findAll();
  }

  // API 3 : BY ID
  @Get(':id')
  findById(@Param('id', ParseIntPipe) id: number) {
    return this.voitureService.findById(id);
  }
}
