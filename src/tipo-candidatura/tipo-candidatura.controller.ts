import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { TipoCandidaturaService } from './tipo-candidatura.service';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
import { UpdateTipoCandidaturaDto } from './dto/update-tipo-candidatura.dto';

@Controller('tipo-candidatura')
export class TipoCandidaturaController {
  constructor(private readonly tipoCandidaturaService: TipoCandidaturaService) {}

  @Post()
  create(@Body() createDto: CreateTipoCandidaturaDto) {
    return this.tipoCandidaturaService.create(createDto);
  }

  @Get()
  findAll() {
    return this.tipoCandidaturaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.tipoCandidaturaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateDto: UpdateTipoCandidaturaDto) {
    return this.tipoCandidaturaService.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.tipoCandidaturaService.remove(+id);
  }
}
