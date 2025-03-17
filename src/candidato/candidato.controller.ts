import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { CandidatoService } from './candidato.service';
import { CreateCandidatoDto } from './dto/create-candidato.dto';

@Controller('candidato')
export class CandidatoController {
  constructor(private readonly candidatoService: CandidatoService) {}

  @Post()
  create(@Body() createCandidatoDto: CreateCandidatoDto) {
    return this.candidatoService.create(createCandidatoDto);
  }

  @Get()
  findAll() {
    return this.candidatoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.candidatoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.candidatoService.remove(+id);
  }
}
