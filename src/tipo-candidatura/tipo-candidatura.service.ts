import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { CreateTipoCandidaturaDto } from './dto/create-tipo-candidatura.dto';
import { UpdateTipoCandidaturaDto } from './dto/update-tipo-candidatura.dto';

@Injectable()
export class TipoCandidaturaService {
  private tiposCandidatura = [];

  create(createDto: CreateTipoCandidaturaDto) {
    const existe = this.tiposCandidatura.find(tc => tc.id_candidatura === createDto.id_candidatura);
    if (existe) {
      throw new BadRequestException('Este tipo de candidatura ya existe');
    }
    this.tiposCandidatura.push(createDto);
    return createDto;
  }

  findAll() {
    return this.tiposCandidatura;
  }

  findOne(id: number) {
    const tipo = this.tiposCandidatura.find(tc => tc.id_candidatura === id);
    if (!tipo) {
      throw new NotFoundException('Tipo de candidatura no encontrado');
    }
    return tipo;
  }

  update(id: number, updateDto: UpdateTipoCandidaturaDto) {
    const index = this.tiposCandidatura.findIndex(tc => tc.id_candidatura === id);
    if (index === -1) {
      throw new NotFoundException('Tipo de candidatura no encontrado');
    }
    this.tiposCandidatura[index] = { ...this.tiposCandidatura[index], ...updateDto };
    return this.tiposCandidatura[index];
  }

  remove(id: number) {
    const index = this.tiposCandidatura.findIndex(tc => tc.id_candidatura === id);
    if (index === -1) {
      throw new NotFoundException('Tipo de candidatura no encontrado');
    }
    const eliminado = this.tiposCandidatura.splice(index, 1);
    return eliminado;
  }
}
